import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Partners from "@/components/Partners";
import Nft from "@/components/NFT";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className} overflow-x-hidden`}>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Partners />
      <Nft />
      <Footer />
    </main>
  );
}
