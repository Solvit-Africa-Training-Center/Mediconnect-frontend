import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setUser, clearUser } from "../store/authSlice";
import type { UserCredentials } from "../Types";

interface AuthContextType {
  user: UserCredentials | null;
  login: (userData: UserCredentials) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const login = (userData: UserCredentials) => {
    dispatch(setUser(userData));
    localStorage.setItem("user", JSON.stringify(userData));


    switch (userData.role) {
      case "doctor":
        navigate("/doctor-dashboard");
        break;
      case "patient":
        navigate("/patient-dashboard");
        break;
      case "pharmacist":
        navigate("/pharmacy-dashboard");
        break;
      default:
        // If the role is not recognized, log out and redirect to home
        logout();
        navigate("/");
    }
  };

  const logout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
