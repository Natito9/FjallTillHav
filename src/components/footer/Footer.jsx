import Image from "next/image";

import Contact from "./Contact";
import VillkorLink from "./VillkorLink";

export default function Footer() {
  return (
    <div className="w-full h-auto md:px-10 px-9 md:pt-25 pt-15 pb-10  flex flex-col justify-around items-start gap-8 bg-black">
      <Contact />

      <div>
        <h3 className="text-white text-lg">DEVELOPER</h3>
        <a
          href="https://www.linkedin.com/in/natalia-torres-lopez/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white"
        >
          Natalia Torres
        </a>
      </div>
      <VillkorLink />
    </div>
  );
}
