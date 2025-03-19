"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <section className="tokogame-container py-6">
      <motion.div
        className="tokogame-section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="tokogame-title">{title}</h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={itemAnimation}
          >
            <Link
              href="#"
              className="flex flex-col items-center w-24 md:w-28"
            >
              <motion.div
                className="tokogame-card w-full aspect-square flex items-center justify-center p-3 mb-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
              <motion.span
                className="text-xs text-center"
                whileHover={{ color: "#18b781" }}
              >
                {item.title}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
