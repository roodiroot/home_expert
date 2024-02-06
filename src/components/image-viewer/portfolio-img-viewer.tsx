"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface PortfolioImgViewerProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  imgList: string[];
}

const PortfolioImgViewer: React.FC<PortfolioImgViewerProps> = ({
  imgList,
  className,
  ...props
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  useEffect(() => {
    if (api) {
      setCurrent(api.selectedScrollSnap());
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <>
      <div className='absolute inset-0'>
        <Carousel className='w-full h-full' setApi={setApi}>
          <CarouselContent className='h-full'>
            {imgList.map((i, index) => (
              <CarouselItem key={index}>
                <Image
                  {...props}
                  src={i}
                  width={700}
                  height={350}
                  alt='portfolio screen'
                  onClick={openImageViewer}
                  className={cn(
                    "w-full h-full object-cover cursor-pointer",
                    className
                  )}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {imgList.length > 1 && (
          <div className='absolute bottom-4 left-4 flex gap-x-1 px-2 py-1 bg-gray-200/20 rounded-md'>
            {imgList.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-[3px] rounded-full bg-gray-200/50",
                  index === current && "bg-white/90"
                )}
              ></div>
            ))}
          </div>
        )}
      </div>
      {isViewerOpen && (
        <div className='relative z-50'>
          <ImageViewer
            src={imgList}
            currentIndex={current}
            disableScroll={false}
            closeOnClickOutside={true}
            backgroundStyle={{ background: "#000000e0", zIndex: 50 }}
            onClose={closeImageViewer}
          />
        </div>
      )}
    </>
  );
};

export default PortfolioImgViewer;
