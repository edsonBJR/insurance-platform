import { useForm } from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import { useState } from "react";

interface LoginFormInputs {
  username: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormInputs) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input label="Login" {...register("username")} />
      <Input
        label="Senha"
        type={showPassword ? "text" : "password"}
        {...register("password")}
      />
      <div className="flex justify-between items-center">
        <Checkbox label="Manter conectado" />
        <button
          type="button"
          className="text-sm text-blue-600 hover:underline"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? "Ocultar Senha" : "Mostrar Senha"}
        </button>
      </div>
      <Button type="submit">Entrar</Button>
      <div className="text-center text-sm">
        <p>
          <a href="#" className="text-blue-600 hover:underline">
            Esqueci a senha
          </a>
        </p>
        <p>
          Ainda não sou cadastrado?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Criar conta
          </a>
        </p>
      </div>
    </form>
  );
}