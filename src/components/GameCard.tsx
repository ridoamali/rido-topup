"use client";

import React from "react";
import Image from "next/image";

interface GameCardProps {
  image: string;
  title: string;
}

export default function GameCard({ image, title }: GameCardProps) {
  return (
    <div className="tokogame-card flex flex-col items-center p-2">
      <div className="relative w-full h-24 mb-2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xs text-center font-medium line-clamp-2">{title}</h3>
    </div>
  );
}