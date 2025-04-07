import LoginForm from "../molecules/LoginForm";

interface AuthCardProps {
  onSubmit: (data: { username: string; password: string }) => void;
}

export default function AuthCard({ onSubmit }: AuthCardProps) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Entrar na Plataforma - MVP Broking</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}