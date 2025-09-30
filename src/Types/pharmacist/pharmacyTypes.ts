export interface User {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface PrescriptionStat {
  title: string;
  value: number;
  subtitle: string;
  icon: string;
  color: 'blue' | 'yellow' | 'green';
}

export interface ActivityItem {
  id: string;
  patientName: string;
  action: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error';
}

export interface SystemAlert {
  id: string;
  type: 'warning' | 'success' | 'info';
  title: string;
  message: string;
  timestamp: string;
}

export interface DispensedRecord {
  id: string;
  patientName: string;
  patientId: string;
  referenceRx: string;
  insuranceCoverage: string;
  digitalOrdinance: string;
  dispensingTimeline: {
    date: string;
    time: string;
    prescribedBy: string;
    location: string;
  };
  status: 'Completed' | 'Pending' | 'Processing';
  total: string;
  pharmacy: string;
}

export interface PharmacyProfile {
  name: string;
  licenseNumber: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
}

export interface PharmacistInfo {
  fullName: string;
  licenseNumber: string;
  phoneNumber: string;
  emailAddress: string;
}

// Backend API Types
export interface Doctor {
  _id: string;
  name: string;
  email: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: {
    line1: string;
    line2: string;
  };
  date: number;
  slots_booked: Record<string, string[]>;
  available: boolean;
}

export interface Appointment {
  _id: string;
  userId: string;
  docId: string;
  slotDate: string;
  slotTime: string;
  userData: {
    name: string;
    email: string;
    phone: string;
    address: {
      line1: string;
      line2: string;
    };
    gender: string;
    dob: string;
  };
  docData: Doctor;
  amount: number;
  date: number;
  cancelled: boolean;
  payment: boolean;
  isCompleted: boolean;
}

export interface Prescription {
  _id: string;
  patientId: string;
  doctorId: string;
  medications: Array<{
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    instructions?: string;
  }>;
  diagnosis: string;
  date: number;
  status: 'pending' | 'dispensed' | 'cancelled';
  pharmacyId?: string;
  dispensedBy?: string;
  dispensedAt?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface DashboardStats {
  doctors: number;
  appointments: number;
  patients: number;
  earnings: number;
}

export interface QRScanResult {
  prescriptionId: string;
  patientName: string;
  doctorName: string;
  medications: Array<{
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
  }>;
  diagnosis: string;
  issueDate: string;
}
