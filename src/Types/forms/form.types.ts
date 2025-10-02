// Form types
export interface RegisterPatientForm {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other';
    address: string;
    emergencyContact: string;
    bloodType?: string;
    allergies?: string;
}

export interface RegisterDoctorForm {
    fullName: string;
    email: string;
    phone: string;
    specialization: string;
    licenseNumber: string;
    yearsOfExperience: number;
    hospital: string;
}

export interface RegisterPharmacistForm {
    fullName: string;
    email: string;
    phone: string;
    licenseNumber: string;
    pharmacyName: string;
    pharmacyAddress: string;
}