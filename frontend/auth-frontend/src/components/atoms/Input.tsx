import { InputHTMLAttributes, forwardRef, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type = "text", ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";

  return (
    <div className="flex flex-col relative">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        ref={ref}
        {...props}
        type={isPasswordType && showPassword ? "text" : type}
        className="border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isPasswordType && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-8 text-sm text-blue-500 hover:underline"
        >
          {showPassword ? "Ocultar" : "Mostrar"}
        </button>
      )}
    </div>
  );
});

export default Input;