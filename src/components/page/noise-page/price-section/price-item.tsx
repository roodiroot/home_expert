"use client";

import PortfolioImgViewer from "@/components/image-viewer/portfolio-img-viewer";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PriceItemProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  img: string;
  price: number;
}

const PriceItem: React.FC<PriceItemProps> = ({
  title,
  description,
  img,
  price,
}) => {
  return (
    <li>
      <div className="aspect-[3/2] relative w-full rounded-2xl bg-gray-100 border-gray-200 overflow-hidden">
        <Image
          src={img}
          width={700}
          height={350}
          alt="portfolio screen"
          className={cn("w-full h-full object-cover cursor-pointer")}
        />
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold leading-8 tracking-tight">
          {title}
        </h3>
        <p className="mt-4 text-sm text-gray-600 line-clamp-3">{description}</p>
        <p className="mt-4 text-accent-600 font-semibold text-2xl line-clamp-3">
          от{" "}
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(price)}
        </p>
      </div>
    </li>
  );
};

export default PriceItem;
