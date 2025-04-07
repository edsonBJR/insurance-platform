import { useNavigate } from "react-router-dom";
import AuthCard from "../organisms/AuthCard";
import { useAuth } from "../../context/AuthContext";
import { mockUser } from "../../mocks/mockUser";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = ({ username, password }: { username: string; password: string }) => {
    console.log("Tentando login com:", username, password);
    if (username === mockUser.username && password === mockUser.password) {
      navigate("/clientes");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthCard onSubmit={handleLogin} />
    </div>
  );
}
