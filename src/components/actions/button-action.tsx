"use client";

import useModal from "@/hooks/useModal";
import { Button } from "@/components/animation-component/button";
import { Button as ClassicButton } from "@/components/ui/elements-button";
import { LinkButton } from "../animation-component/link-button";

interface ButtonActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "link" | "default";
}
const ButtonAction: React.FC<ButtonActionProps> = ({
  variant,
  children,
  ...props
}) => {
  const { onOpen } = useModal();
  if (variant === "link") {
    return (
      <LinkButton onClick={onOpen} {...props}>
        {children}
      </LinkButton>
    );
  }
  if (variant === "default") {
    return (
      <ClassicButton onClick={onOpen} {...props}>
        {children}
      </ClassicButton>
    );
  }
  return (
    <Button onClick={onOpen} {...props}>
      {children}
    </Button>
  );
};

export default ButtonAction;
