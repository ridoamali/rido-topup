"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
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
          <motion.button
            className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-200"
            whileHover={{ backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative h-4 w-6">
              <Image
                src="https://ext.same-assets.com/2885252945/10300235.jpeg"
                alt="Indonesia"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <span>Indonesia (Rp)</span>
          </motion.button>
          <motion.button
            className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded flex items-center gap-1"
            whileHover={{ backgroundColor: "#e5e7eb" }}
            whileTap={{ scale: 0.97 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            Sign in with Google
          </motion.button>
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
            <motion.div
              className="relative h-9 w-28"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="sitelogo.png"
                alt="Ridotopup Logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {['Top Up Game', 'Voucher', 'Pulsa', 'E-Money', 'News & Promos'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="text-sm font-medium relative group"
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <div className="relative">
          <AnimatePresence>
            <motion.div
              animate={searchFocused ? { width: ['100%', '120%'] } : { width: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Cari di Ridotopup..."
                className="pl-8 pr-3 py-2 rounded-md border border-gray-200 text-sm w-full md:w-[250px] transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <motion.div
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                animate={searchFocused ? { scale: 1.2, color: '#18b781' } : { scale: 1, color: '#9ca3af' }}
                transition={{ duration: 0.2 }}
              >
                <Search className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
