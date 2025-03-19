"use client";

import React, { useState } from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, ChevronDown, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Apakah Diamond/Chip/Paket dari Ridotopup.com Legal?",
      answer: "Ya, semua produk digital yang kami jual di Ridotopup.com 100% legal dan resmi dari penyedia layanan.",
    },
    {
      question: "Bagaimana Cara Top-Up Diamonds atau Beli Voucher?",
      answer: "Pilih produk yang ingin dibeli, masukkan informasi akun atau ID game Anda, pilih metode pembayaran, dan selesaikan transaksi. Diamonds atau voucher akan segera masuk ke akun Anda.",
    },
    {
      question: "Apakah Bisa Bayar Lewat Pulsa?",
      answer: "Ya, kami menerima pembayaran via pulsa dari berbagai operator seperti Telkomsel, XL, Indosat, dan lainnya.",
    },
    {
      question: "Pembayaran Berhasil Tapi Item Belum Masuk?",
      answer: "Biasanya item akan masuk otomatis dalam 5-10 menit. Jika belum masuk dalam waktu tersebut, silakan hubungi customer service kami.",
    },
    {
      question: "Kenapa Harus Beli Di Ridotopup.com?",
      answer: "Kami menawarkan harga termurah, proses cepat, aman, serta dukungan pelanggan 24/7 untuk memastikan pengalaman top-up game Anda menyenangkan.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.footer
      className="bg-primary text-white pt-12 pb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="tokogame-container">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="relative w-48 h-12">
            <Image
              src="sitelogo.png"
              alt="Ridotopup Logo"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-3">Top Up Games Voucher Lebih Murah 20%, Cepat, dan Aman</h2>
          <p className="text-sm text-white/90">
            Situs resmi top up games dan voucher harga termurah, tercepat, dan terpercaya. Beli Diamond Mobile Legends ML, Free Fire FF DM, Royal Dreams, HDI MD, Steam Wallet, PUBG UC, Bigo Diamonds, Boss Party, CODM CP, Honor of Kings Tokens, Genshin Impact Crystals dengan diskon dan harga promo paling murah dan banyak bonus menarik!
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg p-4 mb-8"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            {faqItems.map((faq, index) => (
              <React.Fragment key={index}>
                <motion.button
                  className="text-left text-gray-800 font-medium py-2 px-4 rounded flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-4 pb-2 text-sm text-gray-600"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                {index < faqItems.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Follow Kami</h3>
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, link: "https://www.facebook.com/ridopt/" },
                { icon: <Instagram className="h-5 w-5" />, link: "https://www.instagram.com/ridooam" },
                { icon: <Twitter className="h-5 w-5" />, link: "https://twitter.com/ridoamali" },
                { icon: <Youtube className="h-5 w-5" />, link: "https://www.youtube.com/channel/UCifxr372uuoJ3eG8phEYf4g" },
                { icon: <Music2 className="h-5 w-5" />, link: "https://www.tiktok.com/@masdoch" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                >
                  <Link href={social.link} className="bg-white/20 p-2 rounded-full hover:bg-white/30 block">
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Region</h3>
            <motion.button
              className="flex items-center gap-1 px-4 py-2 rounded bg-white/20 hover:bg-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="https://ext.same-assets.com/2885252945/10300235.jpeg"
                alt="Indonesia"
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span>Indonesia (Rp)</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="font-bold mb-3">Kontak Kami</h3>
            <div className="flex flex-col gap-2">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href="mailto:ridoamali1@gmail.com" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  ridoamali1@gmail.com
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href="mailto:ridoamali1@gmail.com" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  ridoamali1@gmail.com
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between gap-4 text-sm text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {['News & Promos', 'Search Games', 'Terms'].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ color: '#ffffff' }}
              >
                <Link href={`/${item.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-white">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <div>
            <p>Copyright © 2025 PT Semesta Selaras Technology All Rights Reserved</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
