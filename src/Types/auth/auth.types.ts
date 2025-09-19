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
    user: User;
    token: string;
    refreshToken?: string;
}

export interface User {
    id: string;
    email: string;
    fullName: string;
    role: 'patient' | 'doctor' | 'pharmacist';
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}