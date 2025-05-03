import Head from "next/head";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import BannerKr from "@/components/BannerKr";
import VideoSection from "@/components/VideoSection";
import SpringerSection from "@/components/SpringerSection";
import Documentary from "@/components/Documentary";
import FundingLevels from "@/components/FundingLevels";
import AboutUs from "@/components/AboutUs";
import Villkor from "@/components/Villkor";

export default function Home() {
  return (
    <>
     <Head>
        <title>Från Fjäll till Hav | Ett löpäventyr för vår planets framtid</title>
        <meta
          name="description"
          content="Ett insamlingsäventyr där vi springer hela
            Kungsleden, över 440 kilometer genom Sveriges vildaste natur, för att
            sprida hopp och skapa förändring"
        />
      </Head>
      <NavBar/>
      <Header/>
      <BannerKr/>
      <Intro/>
      <VideoSection/>
      <SpringerSection/>
      <Documentary/>
      <FundingLevels/>
      <AboutUs/>
      <Villkor/>

      
    </>
  );
}
