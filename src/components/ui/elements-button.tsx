"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

//BUTTON
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "link" | undefined;
  arrow?: boolean;
  props?: Element;
  item?: any;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, arrow, item, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={disabled}
        className={cn(
          "text-sm font-semibold",
          item && "flex items-center gap-x-2",
          !variant &&
            "rounded-full bg-accent-600 px-3.5 py-2.5 text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600",
          variant === "link" && "leading-6 text-gray-900",
          disabled && "bg-accent-500",
          className
        )}
      >
        <span className="whitespace-nowrap">{children}</span>
        {arrow && <span aria-hidden="true">&rarr;</span>}
        <span>{item}</span>
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button };
