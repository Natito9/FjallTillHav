import CostumeHead from "@/components/head/CostumeHead";
import NavBar from "@/components/NavBar";
import Header from "@/components/Hero/Header";
import Intro from "@/components/Intro";
import BannerKr from "@/components/BannerKr";
import VideoProject from "@/components/videos/VideoProject";
import SpringerSection from "@/components/SpringerSection";
import VideoDocumentary from "@/components/videos/VideoDocumentary";
import FundingLevels from "@/components/FundingLevels";
import AboutUs from "@/components/AboutUs";
import Ocean from "@/components/Ocean";
import Footer from "@/components/footer/Footer";
import ScrollingLogos from "@/components/Hero/ScrollingLogos";
import Sponsors from "@/components/Sponsors";
import Map from "@/components/Map";
import InstaPosts from "@/components/InstaPosts";

export default function Home() {
  return (
    <>
     <CostumeHead />
      <NavBar />
      <Header />
      <ScrollingLogos />
      <BannerKr />
      <Map />
      <InstaPosts />
      <Intro />
      <VideoProject />
      <SpringerSection />
      <VideoDocumentary />
      <FundingLevels />
      <AboutUs />
      <Ocean />
      <Sponsors />
      <Footer />
    </>
  );
}
