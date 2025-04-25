
import { cn } from "../../lib/Utils";
import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  // pode adicionar props específicas se quiser
}

export function Card({ className, ...props }: CardProps) {
  return <div className={cn("rounded-lg bg-card text-card-foreground shadow", className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...props} />;
}