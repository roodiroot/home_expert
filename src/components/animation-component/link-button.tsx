"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";

//BUTTON
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const rotateArrow = {
  hover: {
    rotate: "360deg",
    transition: { duration: 0.4, ease: "backInOut" },
  },
};

const text = {
  hover: {
    x: 10,
    transition: { duration: 0.4, ease: "backInOut" },
  },
};

const LinkButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, onClick }, ref) => {
    return (
      <motion.button
        whileHover="hover"
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "flex items-center gap-3 text-accent-600 font-medium",
          className
        )}
      >
        <motion.span
          variants={rotateArrow}
          className="sm:group-hover:rotate-[360deg]"
        >
          <Icons.arrowRight />
        </motion.span>
        <motion.span variants={text}>{children}</motion.span>
      </motion.button>
    );
  }
);
// const LinkButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ children, className, variant, arrow, item, disabled, ...props }, ref) => {
//     return (
//       <button
//         ref={ref}
//         {...props}
//         disabled={disabled}
//         className={cn(
//           "flex items-center gap-3 text-accent-600 font-medium group",
//           className
//         )}
//       >
//         <span className="sm:group-hover:rotate-[360deg] transition-all duration-200">
//           <Icons.arrowRight />
//         </span>
//         <span className="sm:group-hover:translate-x-3 transition-all duration-200">
//           {children}
//         </span>
//       </button>
//     );
//   }
// );
LinkButton.displayName = "LinkButton";
export { LinkButton };
