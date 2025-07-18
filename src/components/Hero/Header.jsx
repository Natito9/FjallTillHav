import Swish from "@/components/Hero/swish/Swish";
import Image from "next/image";
import HuvudSponsor from "./HuvudSponsor";

export default function Header() {
  return (
    <header
      id="home"
      data-theme="dark"
           className="relative grid md:grid-cols-2 grid-cols-1 h-auto md:min-h-[640px] min-h-[1000px] w-full overflow-hidden md:p-15 md:pt-25  pt-20"
    >
      <HuvudSponsor />
          <Image
        src="/assets/FFTH-BG2.png"
        alt="Background image of ice in blue tones"
        fill
        priority 
        className="object-cover object-center -z-10"
      />
      <Image
        src="/assets/FFTH-logo.png"
        alt="Logo Från Fjäll till Hav"
        width={500}
        height={300}
         priority={true}
        className="place-self-center w-[80%] md:w-full"
      />
     <div className="flex justify-center items-center w-full h-full">
        <Swish />
      </div>
    </header>
  );
}
