"use client";

import { motion } from "framer-motion";

import { Icons } from "../ui/icons";
import useMenu from "@/hooks/use-menu";

const Burger = () => {
  const { toggle, isOpen } = useMenu();

  return (
    <div className="lg:hidden">
      <div
        onClick={() => toggle()}
        className="cursor-pointer bg-gray-200/65 rounded-full h-[42px] backdrop-blur-sm p-1 flex items-center justify-center"
      >
        <motion.div
          whileHover={{
            backgroundColor: "hsl(178, 100%, 100%)",
          }}
          className="transition-colors px-3.5 py-1.5 h-full rounded-full "
        >
          <Icons.burger open={isOpen} />
        </motion.div>
      </div>
    </div>
  );
};

export default Burger;
