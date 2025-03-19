"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="tokogame-container py-2 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6">
            <Image
              src="https://ext.same-assets.com/1361958852/1331984221.png"
              alt="Ridotopup Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm hidden md:block">Top Up Games & Voucher Murah, Aman, Cepat</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-200">
            <div className="relative h-4 w-6">
              <Image
                src="https://ext.same-assets.com/2885252945/10300235.jpeg" 
                alt="Indonesia"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <span>Indonesia (Rp)</span>
          </button>
          <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="tokogame-container py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium">Home</Link>
                <Link href="/topup" className="text-lg font-medium">Top Up Game</Link>
                <Link href="/voucher" className="text-lg font-medium">Voucher</Link>
                <Link href="/pulsa" className="text-lg font-medium">Pulsa</Link>
                <Link href="/emoney" className="text-lg font-medium">E-Money</Link>
                <Link href="/news" className="text-lg font-medium">News & Promos</Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/">
            <div className="relative h-9 w-28">
              <Image
                src="sitelogo.png"
                alt="Ridotopup Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/topup" className="text-sm font-medium">Top Up Game</Link>
            <Link href="/voucher" className="text-sm font-medium">Voucher</Link>
            <Link href="/pulsa" className="text-sm font-medium">Pulsa</Link>
            <Link href="/emoney" className="text-sm font-medium">E-Money</Link>
            <Link href="/news" className="text-sm font-medium">News & Promos</Link>
          </nav>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari di Ridotopup..."
            className="pl-8 pr-3 py-2 rounded-md border border-gray-200 text-sm w-full md:w-[250px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}