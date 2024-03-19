import Image from "next/image";
import React from "react";

interface LogoProps {
  height: number;
  width: number;
}

export const Logo = ({ height, width }: LogoProps) => {
  return (
    <Image
      src={"/cm-logo-2.jpg"}
      alt="Constructor"
      height={height}
      width={width}
      priority
      className="p-0 m-0 rounded-full hover:scale-110"
    />
  );
};
