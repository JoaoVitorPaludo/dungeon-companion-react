import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}
