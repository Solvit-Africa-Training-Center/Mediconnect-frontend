// Authentication related types
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface ChangePasswordData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface AuthResponse {
    user: UserCredentials;
    token: string;
    refreshToken?: string;
}

export interface UserCredentials {
    id: string;
    email: string;
    fullName: string;
    role: 'patient' | 'doctor' | 'pharmacist';
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}