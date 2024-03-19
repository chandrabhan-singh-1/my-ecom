import { db } from "@/lib/db";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "../card/product-card";

export const SlidingProduct = async () => {
  const products = await db.product.findMany({});

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="flex h-36 w-auto overflow-x-auto">
              {products?.map((product) => (
                <ProductCard
                  type="product"
                  title={product.name}
                  img={product.images[0]}
                  id={product.id}
                  width={60}
                  height={60}
                  className=""
                />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
