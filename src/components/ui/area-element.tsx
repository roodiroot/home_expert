import { cn } from "@/lib/utils";
import React from "react";

interface AreaElement
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  labelOn?: boolean;
}
const AreaElement = React.forwardRef<HTMLTextAreaElement, AreaElement>(
  ({ id, label, labelOn, className, rows = 4, ...props }, ref) => {
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
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          {...props}
          className="block w-full rounded-[25px] px-3.5 py-2 text-gray-900 shadow-sm border border-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6 "
        />
      </div>
    );
  }
);

AreaElement.displayName = "AreaElement";
export { AreaElement };
