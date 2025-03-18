"use client";

import React from "react";
import GameCard from "@/components/GameCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface GameSectionProps {
  title: string;
  games: {
    id: number;
    title: string;
    image: string;
  }[];
  viewAllLink: string;
}

export default function GameSection({ title, games, viewAllLink }: GameSectionProps) {
  return (
    <section className="tokogame-container py-8">
      <div className="tokogame-section-title">
        <h2 className="tokogame-title">{title}</h2>
        <Link href={viewAllLink} className="text-sm text-gray-600 whitespace-nowrap flex items-center">
          Lihat Semua
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} image={game.image} title={game.title} />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="rounded-full text-primary border-primary hover:bg-primary/10">
          Lihat Semua
        </Button>
      </div>
    </section>
  );
}