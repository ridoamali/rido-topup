"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "./ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap() || 0);
    };

    api.on("select", handleSelect);

    // Start autoplay
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      api.off("select", handleSelect);
      clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <motion.div
      className="tokogame-container py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {heroItems.map((item, index) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                className="tokogame-card h-full flex flex-col overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <motion.div
                  className="p-4 flex flex-col flex-1 relative z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <span className="text-xs text-primary mb-1 font-medium">{item.date}</span>
                  <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h3>
                </motion.div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {heroItems.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-primary w-4' : 'bg-gray-300'}`}
              onClick={() => api?.scrollTo(index)}
              whileHover={{ scale: 1.5 }}
              animate={{
                width: currentIndex === index ? 16 : 8,
                backgroundColor: currentIndex === index ? '#18b781' : '#d1d5db'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute top-1/2 -left-[-50px] -translate-y-1/2 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <CarouselPrevious className="bg-white shadow-lg hover:bg-gray-50" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-[-50px] -translate-y-1/2 z-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <CarouselNext className="bg-white shadow-lg hover:bg-gray-50 " />
        </motion.div>
      </Carousel>
    </motion.div>
  );
}
