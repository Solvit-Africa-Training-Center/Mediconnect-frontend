// Pharmacist related types
export interface Pharmacist {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    licenseNumber: string;
    pharmacyName: string;
    pharmacyAddress: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

// Pharmacy Operations types
export interface ScanQrData {
    qrHash: string;
    pharmacistId: string;
}

export interface PrescriptionLog {
    id: string;
    prescriptionId: string;
    action: 'scanned' | 'validated' | 'dispensed' | 'rejected';
    pharmacistId: string;
    pharmacistName: string;
    timestamp: string;
    notes?: string;
}

export interface DispensingHistory {
    id: string;
    prescriptionId: string;
    pharmacistId: string;
    pharmacistName: string;
    dispensedAt: string;
    medications: Medication[];
    notes?: string;
}

export interface DispensingSummary {
    prescriptionId: string;
    patientName: string;
    doctorName: string;
    totalMedications: number;
    dispensedMedications: number;
    status: string;
    dispensedAt?: string;
}

import { Medication } from '../prescription/prescription.types';