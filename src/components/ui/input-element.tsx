import React from "react";
import { cn } from "@/lib/utils";

interface InputElementProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  labelOn?: boolean;
  ariaInvalid?: boolean;
}

const InputElement = React.forwardRef<HTMLInputElement, InputElementProps>(
  (
    {
      label,
      inputMode = "text",
      labelOn,
      className,
      id,
      placeholder,
      ariaInvalid,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("w-full", className)}>
        <label
          htmlFor={id}
          className={`${
            labelOn
              ? "block text-start text-sm font-semibold leading mb-2.5"
              : "sr-only"
          }`}
        >
          {label}
        </label>
        <input
          ref={ref}
          {...props}
          id={id}
          placeholder={placeholder}
          inputMode={inputMode}
          className={cn(
            "w-full min-w-0 flex-auto rounded-md border px-3.5 py-2 text-gray-900 border-gray-300 placeholder:text-gray-400 placeholder:font-light shadow-sm  text-sm sm:leading-6 focus:outline-accent-600",
            ariaInvalid &&
              "ring-rose-600 placeholder:text-rose-600 focus:outline-rose-600 border-rose-300"
          )}
        />
      </div>
    );
  }
);
InputElement.displayName = "InputElement";
export { InputElement };
