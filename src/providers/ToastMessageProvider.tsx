import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { ToastMessageProps } from "@src/types";

interface ToastMessageContextProps {
  toastMessages: ToastMessageProps[];
  showToastMessage: ({ type, message }: Omit<ToastMessageProps, "id">) => void;
  removeToastMessage: (id: string) => void;
}

const ToastMessageContext = createContext<ToastMessageContextProps | null>(
  null
);

const TOAST_MESSAGE_TIMEOUT = 3000;

export default function ToastMessageProvider({ children }: PropsWithChildren) {
  const [toastMessages, setToastMessages] = useState<ToastMessageProps[]>([]);
  const timeoutIds = useRef(new Set<NodeJS.Timeout>());

  const removeToastMessage = useCallback(
    (id: string) =>
      setToastMessages((prev) =>
        prev.filter((toastMessage) => toastMessage.id !== id)
      ),
    []
  );

  const showToastMessage = useCallback(
    ({ type, message }: Omit<ToastMessageProps, "id">) => {
      const id = Math.random().toString(36).substring(7);
      setToastMessages((prev) => [...prev, { message, id, type }]);
      const timeoutId = setTimeout(() => {
        removeToastMessage(id);
        timeoutIds.current.delete(timeoutId);
      }, TOAST_MESSAGE_TIMEOUT);
      timeoutIds.current.add(timeoutId);
    },
    [removeToastMessage]
  );

  return (
    <ToastMessageContext.Provider
      value={{ toastMessages, removeToastMessage, showToastMessage }}
    >
      {children}
    </ToastMessageContext.Provider>
  );
}

export const useToastMessageContext = () => {
  const context = useContext(ToastMessageContext);
  if (!context) {
    throw new Error("useToastMessageContext");
  }
  return context;
};
