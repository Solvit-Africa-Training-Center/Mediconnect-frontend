export interface Patient {
  id: string;
  fullName: string;
  referenceNumber: string;
  gender: string;
  phone: string;
  email: string;
  createdAt: string; // Or Date if you parse it upon fetch
  // Add other patient properties as needed from your API response
  // For example:
  // dateOfBirth: string;
  // address: string;
}