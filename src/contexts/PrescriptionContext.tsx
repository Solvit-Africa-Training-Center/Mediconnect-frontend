import { createContext, useContext, useState, ReactNode } from 'react'
import type { Patient } from '../Types/patient/patient.types'
import type { Medication, CreatePrescriptionData } from '../Types/prescription/prescription.types'

interface PrescriptionState {
  selectedPatient: Patient | null
  diagnosis: string
  instructions: string
  medications: Medication[]
}

interface PrescriptionContextType {
  prescription: PrescriptionState
  setSelectedPatient: (patient: Patient | null) => void
  setDiagnosis: (diagnosis: string) => void
  setInstructions: (instructions: string) => void
  addMedication: (medication: Omit<Medication, 'id'>) => void
  removeMedication: (id: string) => void
  updateMedication: (id: string, medication: Partial<Medication>) => void
  clearPrescription: () => void
  isValid: boolean
}

const PrescriptionContext = createContext<PrescriptionContextType | undefined>(undefined)

export const usePrescription = () => {
  const context = useContext(PrescriptionContext)
  if (!context) {
    throw new Error('usePrescription must be used within PrescriptionProvider')
  }
  return context
}

interface PrescriptionProviderProps {
  children: ReactNode
}

export const PrescriptionProvider = ({ children }: PrescriptionProviderProps) => {
  const [prescription, setPrescription] = useState<PrescriptionState>({
    selectedPatient: null,
    diagnosis: '',
    instructions: '',
    medications: []
  })

  const setSelectedPatient = (patient: Patient | null) => {
    setPrescription(prev => ({ ...prev, selectedPatient: patient }))
  }

  const setDiagnosis = (diagnosis: string) => {
    setPrescription(prev => ({ ...prev, diagnosis }))
  }

  const setInstructions = (instructions: string) => {
    setPrescription(prev => ({ ...prev, instructions }))
  }

  const addMedication = (medication: Omit<Medication, 'id'>) => {
    const newMedication: Medication = {
      ...medication,
      id: Date.now().toString()
    }
    setPrescription(prev => ({
      ...prev,
      medications: [...prev.medications, newMedication]
    }))
  }

  const removeMedication = (id: string) => {
    setPrescription(prev => ({
      ...prev,
      medications: prev.medications.filter(med => med.id !== id)
    }))
  }

  const updateMedication = (id: string, updates: Partial<Medication>) => {
    setPrescription(prev => ({
      ...prev,
      medications: prev.medications.map(med =>
        med.id === id ? { ...med, ...updates } : med
      )
    }))
  }

  const clearPrescription = () => {
    setPrescription({
      selectedPatient: null,
      diagnosis: '',
      instructions: '',
      medications: []
    })
  }

  const isValid = !!(
    prescription.selectedPatient &&
    prescription.diagnosis.trim() &&
    prescription.medications.length > 0
  )

  const value = {
    prescription,
    setSelectedPatient,
    setDiagnosis,
    setInstructions,
    addMedication,
    removeMedication,
    updateMedication,
    clearPrescription,
    isValid
  }

  return (
    <PrescriptionContext.Provider value={value}>
      {children}
    </PrescriptionContext.Provider>
  )
}