import Image from "next/image";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Recruitment from '@/components/Recruitment';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Steps from "@/components/Steps";
import SuccessStories from "@/components/SuccessStories";
import DirectContact from "@/components/DirectContact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#f8f8f8" }}>
      <Header />
      <Hero />
      
      <Recruitment />
      <Stats />
      <Steps />
      <SuccessStories />
      <DirectContact />
      <FAQ />
      <Footer />
    </main>
  );
}

