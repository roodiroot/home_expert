"use client";
import useModal from "@/hooks/useModal";
import { Button } from "../ui/elements-button";

interface ButtonActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const ButtonAction: React.FC<ButtonActionProps> = ({ children, ...props }) => {
  const { onOpen } = useModal();
  return (
    <Button onClick={onOpen} {...props}>
      {children}
    </Button>
  );
};

export default ButtonAction;
