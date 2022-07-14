import { ReactNode } from "react";

export default interface ButtonProps {
  type?: "primary" | "secondary" | "whiteOutline";
  children: ReactNode;
}
