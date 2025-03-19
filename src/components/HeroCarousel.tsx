"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const heroItems = [
  {
    id: 1,
    title: "Ikuti Event Ridotopup Bagi-Bagi THR Hingga 900.000",
    image: "herocarousel1.png",
    date: "16 Mar 2025",
  },
  {
    id: 2,
    title: "Garena Kerjasama dengan PSSI, Hadirkan Jersey Timnas Indonesia di Free...",
    image: "herocarousel2.jpg",
    date: "14 Mar 2025",
  },
  {
    id: 3,
    title: "Inilah Daftar Kode Redeem FF Terbaru Maret 2025",
    image: "herocarousel3.jpeg",
    date: "12 Mar 2025",
  },
  {
    id: 4,
    title: "Cara Mendapatkan Voice Pack Melody JKT48 di HOK",
    image: "herocarousel4.jpg",
    date: "10 Mar 2025",
  },
  {
    id: 5,
    title: "MPL ID Season 15 Dimulai: Pertarungan Sengit Para Raksasa Mobile Legen...",
    image: "herocarousel5.jpg",
    date: "07 Mar 2025",
  },
];

export default function HeroCarousel() {
  return (
    <div className="tokogame-container py-6">
      <Carousel className="w-full">
        <CarouselContent>
          {heroItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="tokogame-card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs text-primary mb-1">{item.date}</span>
                  <h3 className="font-medium line-clamp-2">{item.title}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}