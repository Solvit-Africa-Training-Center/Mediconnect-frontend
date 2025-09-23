import type { SearchParams } from '../common/base.types';

// Patient related types
export interface Patient {
    id: string;
    referenceNumber: string;
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other';
    address: string;
    emergencyContact: string;
    bloodType?: string;
    allergies?: string[];
    createdAt: string;
    updatedAt: string;
}

export interface PatientHistory {
    id: string;
    patientId: string;
    visitDate: string;
    diagnosis: string;
    symptoms: string;
    treatment: string;
    doctorId: string;
    doctorName: string;
    notes?: string;
}

export interface MedicalVisit {
    patientId: string;
    diagnosis: string;
    symptoms: string;
    treatment: string;
    notes?: string;
    visitDate: string;
}

export interface PatientSearchParams extends SearchParams {
    gender?: string;
    ageRange?: string;
}