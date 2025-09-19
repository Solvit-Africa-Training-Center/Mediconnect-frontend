// Prescription related types
export interface Prescription {
    id: string;
    patientId: string;
    doctorId: string;
    patientName: string;
    doctorName: string;
    medications: Medication[];
    diagnosis: string;
    instructions: string;
    status: 'pending' | 'dispensed' | 'rejected' | 'expired';
    qrCode?: string;
    createdAt: string;
    expiresAt: string;
}

export interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    quantity: number;
    instructions?: string;
}

export interface CreatePrescriptionData {
    patientId: string;
    diagnosis: string;
    medications: Omit<Medication, 'id'>[];
    instructions: string;
}

// QR Code types
export interface QrCode {
    id: string;
    prescriptionId: string;
    qrHash: string;
    isActive: boolean;
    scanCount: number;
    createdAt: string;
    expiresAt: string;
}

export interface QrCodeStats {
    qrHash: string;
    scanCount: number;
    lastScanned?: string;
    isActive: boolean;
    prescriptionStatus: string;
}