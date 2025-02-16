import { ToastMessageProps } from "@src/types";
import { useToastMessageContext } from "@providers/ToastMessageProvider";
import CrossIcon from "@icons/cross.svg";

const ToastMessageItem = ({ id, message, type }: ToastMessageProps) => {
  const { removeToastMessage } = useToastMessageContext();

  const typeStyles = {
    error: "bg-red-500",
    success: "bg-green-500",
    info: "bg-blue-700",
  };

  return (
    <div
      role={"toastMessage"}
      className={`flex justify-between items-center text-neutral-50 rounded-lg shadow-xl p-2 pl-4 gap-3 animate-slideIn ${typeStyles[type]}`}
    >
      {message}
      <button
        onClick={() => removeToastMessage(id)}
        id={"btn-toast-close"}
        aria-label={"btn-toast-close"}
      >
        <CrossIcon className="h-6 w-6 text-neutral-50 hover:text-neutral-950" />
      </button>
    </div>
  );
};

export default ToastMessageItem;
