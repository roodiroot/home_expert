"use client";

import { motion } from "framer-motion";

interface BenefitItemProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <motion.div
      whileHover="hover"
      animate="rest"
      className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
    >
      <div className="md:shrink-0">
        <div className="flow-root">{children}</div>
      </div>
      <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm mt-3 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitItem;
