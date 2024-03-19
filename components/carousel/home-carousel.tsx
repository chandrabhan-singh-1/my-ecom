"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Images = [
  {
    src: "/home-1.jpg",
    alt: "Photo 1",
  },
  {
    src: "/home-1.jpg",
    alt: "Photo 2",
  },
  {
    src: "/home-1.jpg",
    alt: "Photo 3",
  },
  {
    src: "/home-1.jpg",
    alt: "Photo 4",
  },
  {
    src: "/home-1.jpg",
    alt: "Photo 5",
  },
  {
    src: "/home-1.jpg",
    alt: "Photo 6",
  },
];

export const HomeCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3500,
        }),
      ]}
      className="bg-zinc-300 transition-all p-2 max-w-full m-auto"
    >
      <CarouselContent className="flex gap-2">
        {Images.map((image, idx) => (
          <CarouselItem key={idx} className="relative w-[90%] h-32 md:h-52">
            <Image
              fill
              sizes="inherit"
              src={image.src}
              alt={image.alt}
              className="object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
