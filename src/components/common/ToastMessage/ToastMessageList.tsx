import { useToastMessageContext } from "@providers/ToastMessageProvider";
import ToastMessageItem from "@components/common/ToastMessage/ToastMessageItem";

const ToastMessageList = () => {
  const { toastMessages } = useToastMessageContext();
  return (
    <div
      role={"alertdialog"}
      aria-live={"polite"}
      className={"fixed top-4 left-1/2 translate-x-[-50%] flex flex-col gap-3"}
    >
      {toastMessages.map((toastMessage) => (
        <ToastMessageItem key={toastMessage.id} {...toastMessage} />
      ))}
    </div>
  );
};
export default ToastMessageList;
