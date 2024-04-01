"use client";

import { useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Item from "@/components/page/development/caorusel-section/carousel-item";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface CarouselBlockProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  carusel: {
    img: string;
    material: string;
    square: string;
    price: string;
    title: string;
  }[];
}

const CarouselBlock: React.FC<CarouselBlockProps> = ({ carusel }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(3);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          startIndex: 3,
          slidesToScroll: "auto",
        }}
        className="w-full relative"
      >
        <CarouselContent className="mx-3 sm:mx-12 lg:mx-24">
          {carusel.map((i) => (
            <Item
              key={i.img}
              title={i.title}
              img={i.img}
              price={i.price}
              square={i.square}
              material={i.material}
            />
          ))}
        </CarouselContent>

        <ChangeImgButton
          api={api}
          type="right"
          className="top-1/2 -translate-x-1/2 left-24 lg:left-36"
        />
        <ChangeImgButton
          api={api}
          type="left"
          className="top-1/2 -translate-x-1/2 right-10 lg:right-24"
        />
      </Carousel>
      <PaginationButtons api={api} current={current} carusel={carusel} />
    </>
  );
};

// Компоненты кнопок в право/лево

interface ChangeImgButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  api: CarouselApi;
  type: "left" | "right";
}

const ChangeImgButton: React.FC<ChangeImgButtonProps> = ({
  api,
  type,
  className,
}) => (
  <div
    onClick={() => {
      if (type === "left") api?.scrollNext();
      if (type === "right") api?.scrollPrev();
    }}
    className={cn(
      "cursor-pointer group hidden sm:block absolute w-12 h-12 rounded-full bg-gray-200/65 backdrop-blur-sm p-1",
      className
    )}
  >
    <div className="w-full h-full group-hover:bg-white transition-colors rounded-full relative">
      {type === "left" && (
        <Icons.left className="absolute top-1/2 -translate-y-1/2 left-4  stroke-gray-600 group-hover:scale-125 transition-transform" />
      )}
      {type === "right" && (
        <Icons.right className="absolute top-1/2 -translate-y-1/2 left-3  stroke-gray-600 group-hover:scale-125 transition-transform" />
      )}
    </div>
  </div>
);

// Компонент пагинации карусели

interface PaginationButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  api: CarouselApi;
  current: number;
  carusel: { img: string }[];
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  api,
  current,
  carusel,
}) => (
  <div className="w-full">
    <div className="flex justify-center gap-3 mx-auto">
      {carusel.map((key, index) => (
        <div
          key={key.img}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            "w-4 h-1.5 cursor-pointer bg-gray-300/60 rounded-full",
            index + 1 === current && "bg-gray-600/60"
          )}
        ></div>
      ))}
    </div>
  </div>
);

export default CarouselBlock;
