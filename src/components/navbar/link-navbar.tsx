"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkNavbarProps extends React.HTMLAttributes<HTMLLIElement> {
  name: string;
  link: string;
  index: number;
}

const LinkNavbar: React.FC<LinkNavbarProps> = ({
  name,
  link,
  index,
  className,
}) => {
  const path = usePathname();
  const lent = {
    hover: {
      y: -20,
      transition: { duration: 0.3, ease: "backOut" },
    },
  };
  return (
    <motion.li
      whileHover="hover"
      className={cn(
        "font-medium text-sm hover:bg-white rounded-full transition",
        path === link && "bg-white font-semibold",
        className
      )}
    >
      <Link href={link} className="inline-block py-[13px] px-[26px]">
        <div className="relative overflow-hidden">
          <motion.div
            variants={lent}
            className="absolute top-0 left-0  flex flex-col"
          >
            <RepeatSection number={index + 1}>{name}</RepeatSection>
            <RepeatSection number={index + 1}>{name}</RepeatSection>
          </motion.div>
          <RepeatSection number={index + 1} className="invisible">
            {name}
          </RepeatSection>
        </div>
      </Link>
    </motion.li>
    // <li
    //   {...props}
    //   className={cn(
    //     "font-medium text-sm group hover:bg-white rounded-full transition",
    //     className
    //   )}
    // >
    //   <Link href={link} className="inline-block py-[13px] px-[26px]">
    //     <div className="relative overflow-hidden">
    //       <div className="absolute top-0 left-0 transition duration-300 flex flex-col group-hover:sm:-translate-y-5">
    //         <RepeatSection>{name}</RepeatSection>
    //         <RepeatSection>{name}</RepeatSection>
    //       </div>
    //       <RepeatSection className="invisible">{name}</RepeatSection>
    //     </div>
    //   </Link>
    // </li>
  );
};

export default LinkNavbar;

interface RepeatSectionProps extends React.HTMLAttributes<HTMLLIElement> {
  number: number;
}

const RepeatSection: React.FC<RepeatSectionProps> = ({
  number,
  children,
  className,
}) => (
  <span className={cn("text-gray-900 text-nowrap inline-block", className)}>
    {children}
    <sup className="ml-1 text-gray-500">{number}</sup>
  </span>
);
