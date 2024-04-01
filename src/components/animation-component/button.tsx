"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

//BUTTON
interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  item?: any;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, item, disabled, onClick }, ref) => {
    const lent = {
      hover: {
        y: -20,
        transition: { duration: 0.3, ease: "backOut" },
      },
    };
    return (
      <motion.button
        ref={ref}
        whileHover="hover"
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "text-sm text-center font-medium tracking-tight rounded-full bg-accent-600 px-10 py-4 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600",
          disabled && "bg-accent-500",
          className
        )}
      >
        <div className="relative overflow-hidden">
          <motion.div
            variants={lent}
            className="absolute top-0 left-0 flex flex-col"
          >
            <RepeatSection item={item}>{children}</RepeatSection>
            <RepeatSection item={item}>{children}</RepeatSection>
          </motion.div>
          <RepeatSection item={item} className="invisible">
            {children}
          </RepeatSection>
        </div>
      </motion.button>
    );
  }
);
// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ children, className, variant, arrow, item, disabled, ...props }, ref) => {
//     return (
//       <button
//         ref={ref}
//         {...props}
//         disabled={disabled}
//         className={cn(
//           "text-sm font-medium tracking-tight",
//           !variant &&
//             "rounded-full bg-accent-600 px-10 py-4 text-white shadow-sm group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600",
//           variant === "link" && "leading-6 text-gray-900",
//           disabled && "bg-accent-500",
//           className
//         )}
//       >
//         <div className="relative overflow-hidden">
//           <div className="absolute top-0 left-0 transition duration-300 flex flex-col group-hover:sm:-translate-y-5 group-focus-visible:sm:-translate-y-5">
//             <RepeatSection item={item}>{children}</RepeatSection>
//             <RepeatSection item={item}>{children}</RepeatSection>
//           </div>
//           <RepeatSection item={item} className="invisible">
//             {children}
//           </RepeatSection>
//         </div>
//       </button>
//     );
//   }
// );
Button.displayName = "Button";
export { Button };

interface RepeatSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  arrow?: boolean;
  item?: React.ReactNode;
}

const RepeatSection: React.FC<RepeatSectionProps> = ({
  arrow,
  item,
  children,
  className,
}) => (
  <div className={cn("flex items-center gap-x-2", className)}>
    <span className="whitespace-nowrap">{children}</span>
    {arrow && <span aria-hidden="true">&rarr;</span>}
    <span>{item}</span>
  </div>
);
