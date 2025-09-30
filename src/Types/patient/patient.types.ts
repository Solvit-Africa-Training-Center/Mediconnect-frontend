export interface Patient {
  id?: string
  fullName: string
  dateOfBirth: string
  phoneNumber: string
  emergencyPhone: string
  gender: string
  insuranceProvider: string
  insuranceNumber: string
  chronicDiseases: string[]
  allergies: string[]
}