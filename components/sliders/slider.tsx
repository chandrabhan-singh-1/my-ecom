import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface SliderProps {
  data: {
    title: string;
    description: string;
    src: string;
    price?: number;
  }[];
  height: number;
}

export function Slider({ data, height }: SliderProps) {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {data.map((item, idx) => (
          <figure key={idx} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={item.src}
                alt={`Photo by ${item.title}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {item.title}
              </span>
              <p className="text-xs ">{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      {/* <ScrollBar orientation="horizontal" /> */}
    </ScrollArea>
  );
}
