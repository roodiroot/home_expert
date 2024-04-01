"use client";

import Image from "next/image";
import CarouselItemWrapper from "./carousel-item-wrapper";
import { LinkButton } from "@/components/animation-component/link-button";
import { IconHome } from "@/components/animation-icons/icons";

import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import ButtonAction from "@/components/actions/button-action";

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  img: string;
  material: string;
  square: string;
  price: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  img,
  material,
  square,
  price,
}) => {
  return (
    <CarouselItemWrapper>
      <div className="w-full h-full bg-slate-500 realative flex items-end justify-start sm:p-4 lg:p-10">
        <CarouselItemBg img={img} />
        <motion.div
          whileHover="hover"
          animate="rest"
          className=" relative w-full sm:max-w-md sm:rounded-2xl bg-white/70 backdrop-blur-sm px-4 sm:px-10 py-8 flex flex-col gap-4 overflow-hidden"
        >
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
              {title}
            </h3>
            <Icons.rating />
          </div>
          <p className="text-gray-600 text-sm">
            Материал стен <span className="font-medium">{material}</span> <br />{" "}
            Общая площадь <span className="font-medium">{square}</span> кв./м.{" "}
            <br /> От <span className="font-medium">{price}</span> ₽
          </p>
          <ButtonAction variant="link">Узнать подробности</ButtonAction>
          <div className="absolute -right-4 -bottom-4 opacity-25 sm:opacity-100">
            <IconHome className="w-28 h-28" />
          </div>
        </motion.div>
      </div>
    </CarouselItemWrapper>
  );
};

export default CarouselItem;

const CarouselItemBg = ({ img }: { img: string }) => (
  <div>
    <Image
      fill={true}
      priority
      src={img}
      alt="carousel image"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/30"></div>
  </div>
);
