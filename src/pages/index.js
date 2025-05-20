import Head from "@/components/Head";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import BannerKr from "@/components/BannerKr";
import VideoSection from "@/components/VideoSection";
import SpringerSection from "@/components/SpringerSection";
import Documentary from "@/components/Documentary";
import FundingLevels from "@/components/FundingLevels";
import AboutUs from "@/components/AboutUs";
import Ocean from "@/components/Ocean";
import Footer from "@/components/Footer";
import Villkor from "@/components/Villkor";

export default function Home() {
  return (
    <>
      <Head />
      <main>
      <NavBar />
      <Header />
      <BannerKr />
      <Intro />
      <VideoSection />
      <SpringerSection />
      <Documentary />
      <FundingLevels />
      <AboutUs />
      <Ocean/>
      <Footer />
      <Villkor />
      </main>
    </>
  );
}
