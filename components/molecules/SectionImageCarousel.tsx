import React from "react";

import Image from "next/image";

import { clsx } from "clsx";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ISectionItem } from "@/lib/types";

const SectionImageCarousel = ({
  images,
}: {
  images: ISectionItem["images"];
}) => {
  return (
    <Carousel className={`flex-1 relative top-12 lg:-top-[100px]`}>
      <CarouselContent className={clsx(`w-full`)}>
        {images.map((item) => (
          <CarouselItem key={`img_${item.src}`} className={`relative`}>
            <AspectRatio ratio={3 / 3.04}>
              <Image
                className={`object-contain`}
                fill={true}
                src={item.src}
                alt={`${item.src}_${item.caption}`}
              />
            </AspectRatio>
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 bg-white`}
            >
              <p
                className={`text-[10px] sm:text-xs text-center text-gray-500 break-all`}
              >
                {item.caption}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SectionImageCarousel;
