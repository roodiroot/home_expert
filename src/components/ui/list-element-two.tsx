"use client";

import * as React from "react";
import { IconCalendar, IconCase, IconClean } from "../animation-icons/icons";

import { motion } from "framer-motion";

// VARIANT TWO
export interface ListElementTwoProps {
  name: string;
  description: string;
  Icon: React.ReactNode;
}
const ListElementTwo: React.FC<ListElementTwoProps> = ({
  name,
  description,
  Icon,
}) => {
  return (
    <motion.div whileHover="hover" animate="rest" className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute z-30  left-0 top-0 -translate-x-[19px] -translate-y-[12px] ">
          {Icon}
        </div>
        {name}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600 text-balance">
        {description}
      </dd>
    </motion.div>
  );
};

export default ListElementTwo;
