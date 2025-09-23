import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
  requiredRole?: string;
}

const ProtectedRoute = ({ children, allowedRoles, requiredRole }: ProtectedRouteProps) => {
  const { user } = useAuth();

  // Determine which roles are allowed
  const roles = allowedRoles ?? (requiredRole ? [requiredRole] : []);

  // Check if user is logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If roles are specified, enforce them
  if (roles.length > 0 && (!user.role || !roles.includes(user.role))) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
