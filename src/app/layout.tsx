import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "@/app/ClientBody";

export const metadata: Metadata = {
  title: "Ridotopup | Top Up Games Diamonds, Vouchers Murah",
  description: "Top Up Game & Voucher Murah untuk game Mobile Legends, Free Fire, Higgs Domino Chips, PUBG Mobile, Royal Dreams, Steam, Honor of Kings, Bigo, Honkai Star Rail, Valorant, Genshin Impact",
  icons: {
    icon: "https://ext.same-assets.com/1361958852/1331984221.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}