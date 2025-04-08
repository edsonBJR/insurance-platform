import { ReactNode } from "react";
import classNames from "classnames";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-gray-200 bg-white shadow-sm dark:bg-gray-300 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
}

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export function CardContent({ children, className }: CardContentProps) {
  return <div className={classNames("p-4", className)}>{children}</div>;
}   