import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductCardProps {
  type: "product" | "store";
  id: string;
  title: string;
  img: string;
  width: number;
  height: number;
  price?: number;
  className?: string;
}

export const ProductCard = ({
  id,
  type,
  title,
  img,
  price,
  width,
  height,
  className,
}: ProductCardProps) => {
  const url = type === "product" ? `products/${id}` : `stores/${id}`;

  return (
    <Link href={url}>
      <Card
        className={cn("rounded-md border-2 border-gray-500 p-4", className)}
      >
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="h-full w-full">
          <Image src={img} alt={title} width={width} height={height} />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          {price && <strong>{price}</strong>}
          <Button size={"sm"} variant={"primary"}>
            View
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
