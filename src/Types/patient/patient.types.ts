export interface ChronicDisease {
  name: string;
  status: string;
  severity: string;
}

export interface Allergy {
  type: string;
  name: string;
  reaction: string;
}

export interface MedicalRecord {
  type: string;
  date: string;
  doctor: string;
  description: string;
}

export interface Patient {
  id: string;
  fullName: string;
  referenceNumber: string;
  gender: string;
  phone: string;
  email: string;
  createdAt: string; // Or Date if you parse it upon fetch
  dateOfBirth: string;
  bloodType: string;
  chronicDiseases: ChronicDisease[];
  allergies: Allergy[];
  // Add other patient properties as needed from your API response
  // For example:
  // address: string;
}