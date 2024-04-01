"use client";
import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";
import { Icons } from "./icons";

interface LinkButton extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkButton: React.FC<LinkButton> = ({
  className,
  children,
  ...props
}) => {
  return (
    <a
      {...props}
      className={cn(
        "text-sm font-semibold px-3.5 py-2.5 flex items-center gap-x-2 leading-6 text-gray-900 whitespace-nowrap",
        className
      )}
    >
      <span className="whitespace-nowrap text-sm sm:text-base">{children}</span>
      <span>
        <Icons.phone className="stroke-gray-600 w-4" />
      </span>
    </a>
  );
};

export default LinkButton;
