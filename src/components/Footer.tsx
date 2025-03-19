"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-4">
      <div className="tokogame-container">
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-12">
            <Image
              src="sitelogo.png"
              alt="Ridotopup Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xl font-bold mb-3">Top Up Games Voucher Lebih Murah 20%, Cepat, dan Aman</h2>
          <p className="text-sm text-white/90">
            Situs resmi top up games dan voucher harga termurah, tercepat, dan terpercaya. Beli Diamond Mobile Legends ML, Free Fire FF DM, Royal Dreams, HDI MD, Steam Wallet, PUBG UC, Bigo Diamonds, Boss Party, CODM CP, Honor of Kings Tokens, Genshin Impact Crystals dengan diskon dan harga promo paling murah dan banyak bonus menarik!
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 mb-8">
          <div className="flex flex-col gap-2">
            <button className="text-left text-gray-800 font-medium py-2 px-4 rounded flex justify-between items-center">
              <span>Apakah Diamond/Chip/Paket dari Ridotopup.com Legal?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <Separator />
            <button className="text-left text-gray-800 font-medium py-2 px-4 rounded flex justify-between items-center">
              <span>Bagaimana Cara Top-Up Diamonds atau Beli Voucher?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <Separator />
            <button className="text-left text-gray-800 font-medium py-2 px-4 rounded flex justify-between items-center">
              <span>Apakah Bisa Bayar Lewat Pulsa?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <Separator />
            <button className="text-left text-gray-800 font-medium py-2 px-4 rounded flex justify-between items-center">
              <span>Pembayaran Berhasil Tapi Item Belum Masuk?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <Separator />
            <button className="text-left text-gray-800 font-medium py-2 px-4 rounded flex justify-between items-center">
              <span>Kenapa Harus Beli Di Ridotopup.com?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-3">Follow Kami</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/ridopt/" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/ridooam" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@masdoch" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
              <Music2 className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCifxr372uuoJ3eG8phEYf4g" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/ridoamali" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Region</h3>
            <button className="flex items-center gap-1 px-4 py-2 rounded bg-white/20 hover:bg-white/30">
              <Image 
                src="https://ext.same-assets.com/2885252945/10300235.jpeg" 
                alt="Indonesia"
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span>Indonesia (Rp)</span>
            </button>
          </div>

          <div>
            <h3 className="font-bold mb-3">Kontak Kami</h3>
            <div className="flex flex-col gap-2">
              <Link href="mailto:ridoamali1@gmail.com" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                cs@ridotopup.com
              </Link>
              <Link href="mailto:ridoamali1@gmail.com" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                partnerships@ridotopup.com
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-white/70">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/news" className="hover:text-white">News & Promos</Link>
            <Link href="/search" className="hover:text-white">Search Games</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
          <div>
            <p>Copyright © 2025 PT Ridotopup Technology All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}