"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  id: number;
  title: string;
  image: string;
}

interface CategorySectionProps {
  title: string;
  items: CategoryItem[];
}

export default function CategorySection({ title, items }: CategorySectionProps) {
  return (
    <section className="tokogame-container py-6">
      <div className="tokogame-section-title">
        <h2 className="tokogame-title">{title}</h2>
      </div>
      
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-8">
        {items.map((item) => (
          <Link
            href="#"
            key={item.id}
            className="flex flex-col items-center w-24 md:w-28"
          >
            <div className="tokogame-card w-full aspect-square flex items-center justify-center p-3 mb-2">
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-xs text-center">{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}