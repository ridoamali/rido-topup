"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-4">
      <div className="tokogame-container">
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-12">
            <Image
              src="https://ext.same-assets.com/580631227/1577429026.svg+xml"
              alt="Tokogame Logo"
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
              <span>Apakah Diamond/Chip/Paket dari Tokogame.com Legal?</span>
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
              <span>Kenapa Harus Beli Di Tokogame.com?</span>
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
              <Link href="https://www.facebook.com/tokogamepage/" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/tokogame" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@tokogame.com" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.622 2c.171.25.341.478.518.715.177.227.349.464.515.687h-3.392v9.737l.007.115c0 1.55-1.133 2.884-2.66 3.121-.108.017-.22.026-.33.033a3.192 3.192 0 01-2.89-1.561 3.254 3.254 0 01-.334-.764 3.206 3.206 0 011.458-3.561 3.17 3.17 0 011.166-.335v-3.331l-.006-.096a.138.138 0 00-.028-.064.108.108 0 00-.069-.032.112.112 0 00-.078.019l-.03.02c-2.339 1.878-5.15 3.544-8.32 3.988V14.35l.138-.023c.242-.045.479-.095.712-.15.616-.142 1.21-.335 1.774-.568.779-.323 1.5-.73 2.16-1.193 2.48-1.737 3.631-4.106 3.631-7.445V3.556h-3.16c.173.24.331.48.488.728.154.24.308.486.474.748 0 .006.005.01.005.018a.14.14 0 01-.095.14.143.143 0 01-.057.01.137.137 0 01-.123-.075 50.483 50.483 0 00-.478-.741 50.796 50.796 0 00-.998-1.416c-.09-.122-.18-.245-.272-.366H9.05c-.143.18-.287.36-.425.548-.137.187-.277.371-.405.563-.225.317-.443.64-.652.97-.068.107-.135.214-.2.322a.121.121 0 01-.105.069.14.14 0 01-.072-.012.14.14 0 01-.069-.14.659.659 0 01.044-.094c.068-.123.138-.245.21-.368.217-.37.446-.73.68-1.084.132-.197.268-.393.406-.585.138-.192.28-.38.418-.569H8v1.315c0 3.795-1.297 6.513-4.106 8.553-1.545 1.055-3.362 1.531-4.577 1.78l-.317.068V17.4l.317-.069c3.787-.907 7.03-2.825 9.569-5.934v4.287l-.115.034c-.239.064-.47.14-.694.22-.11.04-.22.082-.326.127a6.625 6.625 0 00-2.55 1.76 6.527 6.527 0 00-1.463 2.797c-.176.671-.251 1.345-.222 2.023.044 1.061.312 2.093.79 3.03A6.473 6.473 0 007.546 22h.136c1.004 0 1.969-.227 2.848-.675a6.384 6.384 0 002.138-1.786 6.44 6.44 0 001.321-2.584c.142-.553.21-1.12.21-1.686V8.5h3.927l-.1.035a9.421 9.421 0 01-.574.86c-.213.27-.438.527-.682.764a9.275 9.275 0 01-1.793 1.388c-.665.384-1.376.686-2.111.898-.314.09-.633.162-.956.22l-.109.017v3.392l.087-.022c.245-.056.488-.118.728-.186.668-.186 1.316-.426 1.933-.732a9.437 9.437 0 001.909-1.29c.8-.69 1.495-1.523 2.052-2.5a9.28 9.28 0 001.023-2.285c.212-.732.34-1.484.368-2.245V2H16.623z" fillRule="nonzero" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/channel/UCifxr372uuoJ3eG8phEYf4g" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/tokogame_com" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
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
              <Link href="mailto:cs@tokogame.com" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                cs@tokogame.com
              </Link>
              <Link href="mailto:partnerships@tokogame.com" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                partnerships@tokogame.com
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
            <p>Copyright © 2025 PT Semesta Selaras Technology All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}