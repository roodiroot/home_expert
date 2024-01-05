import { toast } from "react-toastify";

export const sendMessage = async (data: any) => {
  const d = await fetch(`/api/order?text=${JSON.stringify(data)}`);
  if (d.status === 200) {
    toast.success("Ожидайте звонка!!!");
    return true;
  }
  toast.error("Ошибка отправки.");
  return false;
};
