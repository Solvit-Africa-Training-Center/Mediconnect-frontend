import React, { createContext, useContext, useState, useMemo } from "react"
import type { Patient } from "../Types/patient/patient.types"
import type { Medication } from "../Types/prescription/prescription.types"

interface PrescriptionState {
  selectedPatient: Patient | null
  diagnosis: string
  instructions: string
  hospitalName: string
  medications: Medication[]
}

interface PrescriptionContextType {
  prescription: PrescriptionState
  setPrescription: React.Dispatch<React.SetStateAction<PrescriptionState>>
  addMedication: (medication: Omit<Medication, "id">) => void
  removeMedication: (id: string) => void
  setSelectedPatient: (patient: Patient | null) => void
  clearPrescription: () => void
  isValid: boolean
}

const PrescriptionContext = createContext<PrescriptionContextType | undefined>(undefined)

const initialState: PrescriptionState = {
  selectedPatient: null,
  diagnosis: "",
  instructions: "",
  hospitalName: "",
  medications: [],
}

export const PrescriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prescription, setPrescription] = useState<PrescriptionState>(initialState)

  const isValid = useMemo(
    () =>
      !!prescription.selectedPatient &&
      prescription.diagnosis.trim() !== "" &&
      prescription.hospitalName.trim() !== "" &&
      prescription.medications.length > 0,
    [prescription]
  )

  const addMedication = (medication: Omit<Medication, "id">) => {
    const newMedication = { ...medication, id: Date.now().toString() }
    setPrescription((prev) => ({ ...prev, medications: [...prev.medications, newMedication] }))
  }

  const removeMedication = (id: string) => {
    setPrescription((prev) => ({ ...prev, medications: prev.medications.filter((med) => med.id !== id) }))
  }

  const setSelectedPatient = (patient: Patient | null) => {
    setPrescription((prev) => ({ ...prev, selectedPatient: patient }))
  }

  const clearPrescription = () => {
    setPrescription(initialState)
  }

  const value = {
    prescription,
    setPrescription,
    addMedication,
    removeMedication,
    setSelectedPatient,
    clearPrescription,
    isValid,
  }

  return <PrescriptionContext.Provider value={value}>{children}</PrescriptionContext.Provider>
}

export const usePrescription = () => {
  const context = useContext(PrescriptionContext)
  if (context === undefined) {
    throw new Error("usePrescription must be used within a PrescriptionProvider")
  }
  return context
}