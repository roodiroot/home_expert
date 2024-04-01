"use client";

import { useRouter } from "next/navigation";

import { LinkButton } from "../animation-component/link-button";

interface ButtonActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  path: string;
}

const ButtonRelink: React.FC<ButtonActionProps> = ({ children, path }) => {
  const router = useRouter();

  return <LinkButton onClick={() => router.push(path)}>{children}</LinkButton>;
};

export default ButtonRelink;
