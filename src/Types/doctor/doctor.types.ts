// Doctor related types
export interface Doctor {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    specialization: string;
    licenseNumber: string;
    yearsOfExperience: number;
    hospital: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface DoctorStats {
    totalPatients: number;
    totalPrescriptions: number;
    monthlyVisits: number;
    activePatients: number;
}