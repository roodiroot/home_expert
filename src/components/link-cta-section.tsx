"use client";

import { useRouter } from "next/navigation";

import { COUNTER_PAGE } from "@/utils/path";
import { Button } from "./ui/elements-button";

interface LinkCtaSectionProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const LinkCtaSection: React.FC<LinkCtaSectionProps> = ({
  className,
  ...props
}) => {
  const router = useRouter();
  return (
    <Button
      className={className}
      {...props}
      onClick={() => router.push(COUNTER_PAGE)}
    >
      Рассчитать
    </Button>
  );
};

export default LinkCtaSection;
