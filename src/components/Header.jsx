import Swish from "@/components/Swish";
import Image from "next/image";

export default function Header() {
  return (
    <header
      id="home"
      data-theme="dark"
           className="relative grid md:grid-cols-2 grid-cols-1 h-[800px] min-h-[800px] overflow-hidden md:p-9"
    >
          <Image
        src="/assets/FFTH-BG2.png"
        alt="Background image of ice in blue tones"
        fill
        priority 
        className="object-cover object-center -z-10"
      />
      <Image
        src="/assets/FRÅN-FJÄLL-TILL-HAV-LOGO.png"
        alt="Logo Från Fjäll till Hav"
        width={500}
        height={300}
        className="place-self-center w-[80%] md:w-full"
      />
      <Swish />
    </header>
  );
}
