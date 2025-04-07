import { mockUser } from "../mocks/mockUser";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


interface AuthContextType {
  user: { username: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const navigate = useNavigate();

  const login = (username: string, password: string): boolean => {
    if (username === mockUser.username && password === mockUser.password) {
      setUser({ username });
      navigate("/clientes");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};