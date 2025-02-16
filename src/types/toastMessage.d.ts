import { ReactNode } from "react";

export type ToastMessageType = "error" | "success" | "info";

export interface ToastMessageProps {
  id: string;
  type: ToastMessageType;
  message: ReactNode;
}
