"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Hint } from "../hint";

const categories = [
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
  {
    src: "/cm-logo.png",
    label: "Charles Dickens",
    title: "Material",
  },
];

export function CategorySlider() {
  return (
    <div
      className="h-28 w-auto overflow-auto p-2 flex shadow-zinc-500 shadow-sm"
      style={{ scrollbarWidth: "none" }}
    >
      {categories.map((item, idx) => (
        <Hint key={idx} label={item.label} side="bottom">
          <div className="relative flex flex-col items-center h-full w-32">
            <div className="absolute h-[85%] w-[85%]">
              <Image
                fill
                sizes="inherit"
                src={item.src}
                alt={item.title}
                priority
              />
            </div>
            <h2 className="absolute text-xs bottom-1">{item.title}</h2>
          </div>
        </Hint>
      ))}
    </div>
  );
}
