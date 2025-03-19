"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface GameCardProps {
  image: string;
  title: string;
}

export default function GameCard({ image, title }: GameCardProps) {
  return (
    <motion.div
      className="tokogame-card flex flex-col items-center p-2"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <motion.div
        className="relative w-full h-24 mb-2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </motion.div>
      <h3 className="text-xs text-center font-medium line-clamp-2">{title}</h3>
      </motion.div>
  );
}