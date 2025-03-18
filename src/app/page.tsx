import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import GameSection from "@/components/GameSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";

// Game data
const topUpGames = [
  {
    id: 1,
    title: "Mobile Legends Diamonds",
    image: "https://ext.same-assets.com/2654521997/2121935087.png",
  },
  {
    id: 2,
    title: "Free Fire Diamonds",
    image: "https://ext.same-assets.com/1394507963/1227683029.png",
  },
  {
    id: 3,
    title: "PUBG Mobile UC",
    image: "https://ext.same-assets.com/2273105763/2829399357.png",
  },
  {
    id: 4,
    title: "Honor of Kings Tokens",
    image: "https://ext.same-assets.com/3000584498/2999760507.png",
  },
  {
    id: 5,
    title: "Zenless Zone Zero",
    image: "https://ext.same-assets.com/4191967623/2948520272.png",
  },
  {
    id: 6,
    title: "Bigo Live Diamonds",
    image: "https://ext.same-assets.com/2939320145/878312924.jpeg",
  },
  {
    id: 7,
    title: "Honkai: Star Rail Shard",
    image: "https://ext.same-assets.com/2594997697/1884593406.png",
  },
  {
    id: 8,
    title: "Valorant Points",
    image: "https://ext.same-assets.com/3254492123/1966816023.jpeg",
  },
  {
    id: 9,
    title: "PUBG Mobile Lite",
    image: "https://ext.same-assets.com/1123995892/3957200007.png",
  },
  {
    id: 10,
    title: "Genshin Impact Crystals",
    image: "https://ext.same-assets.com/2264458156/3871846109.jpeg",
  },
  {
    id: 11,
    title: "King's Choice Diamonds",
    image: "https://ext.same-assets.com/2457233071/1748724430.png",
  },
  {
    id: 12,
    title: "Arena Breakout Bonds",
    image: "https://ext.same-assets.com/2107914058/4022120047.png",
  },
];

const vouchers = [
  {
    id: 1,
    title: "Steam Wallet Code - ID",
    image: "https://ext.same-assets.com/3503071823/514575465.jpeg",
  },
  {
    id: 2,
    title: "PlayStation Network (PSN)",
    image: "https://ext.same-assets.com/584603139/4133166588.png",
  },
  {
    id: 3,
    title: "Roblox Robux",
    image: "https://ext.same-assets.com/154712257/2686557368.png",
  },
  {
    id: 4,
    title: "Netflix",
    image: "https://ext.same-assets.com/3068174826/2664795669.png",
  },
  {
    id: 5,
    title: "Vision+ Voucher",
    image: "https://ext.same-assets.com/652470848/1652684325.png",
  },
  {
    id: 6,
    title: "Vidio",
    image: "https://ext.same-assets.com/340994175/2785750452.jpeg",
  },
];

const pulsaProviders = [
  {
    id: 1,
    title: "XL",
    image: "https://ext.same-assets.com/3656520552/51029128.png",
  },
  {
    id: 2,
    title: "Telkomsel",
    image: "https://ext.same-assets.com/1363264840/4118541707.png",
  },
  {
    id: 3,
    title: "Tri",
    image: "https://ext.same-assets.com/1494586352/1860479263.png",
  },
  {
    id: 4,
    title: "Indosat",
    image: "https://ext.same-assets.com/421366186/742634999.png",
  },
  {
    id: 5,
    title: "Axis",
    image: "https://ext.same-assets.com/2965182690/2975344431.png",
  },
];

const eMoney = [
  {
    id: 1,
    title: "DANA",
    image: "https://ext.same-assets.com/2331976448/1391330896.png",
  },
  {
    id: 2,
    title: "ShopeePay",
    image: "https://ext.same-assets.com/3343397453/987083896.png",
  },
  {
    id: 3,
    title: "OVO",
    image: "https://ext.same-assets.com/1424409890/1522333990.png",
  },
  {
    id: 4,
    title: "Gopay",
    image: "https://ext.same-assets.com/2042878789/2198060246.png",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <HeroCarousel />
      
      <GameSection
        title="TOP UP GAME"
        games={topUpGames}
        viewAllLink="/topup"
      />
      
      <GameSection
        title="VOUCHER"
        games={vouchers}
        viewAllLink="/voucher"
      />
      
      <CategorySection
        title="PULSA"
        items={pulsaProviders}
      />
      
      <CategorySection
        title="E-MONEY"
        items={eMoney}
      />
      
      <Footer />
    </main>
  );
}