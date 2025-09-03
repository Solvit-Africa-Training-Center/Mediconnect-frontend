import Input from "./Input";
import { useState } from "react";
import { Shield, Eye, EyeOff, LogIn } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  password: string;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-card rounded p-6 w-full max-w-md mx-4 shadow-float">
        <div className="text-center">
          <div className="mx-auto mb-4 p-3 bg-gradient-medical rounded-full w-fit">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <div className="text-2xl font-bold text-foreground">Welcome Back</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="email"
            type="email"
            className="pr-10"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <div className="relative">
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground transition-smooth"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          <button type="submit" className="w-full bg-gradient-medical text-primary-foreground py-2 px-4 rounded hover:opacity-90 transition-smooth flex items-center justify-center shadow-medical">
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;