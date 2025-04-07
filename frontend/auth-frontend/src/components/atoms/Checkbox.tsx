import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" {...props} />
    {label}
  </label>
);

export default Checkbox;