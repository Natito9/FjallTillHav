import Image from "next/image";
import React from "react";

const baseLogos = [
  { src: "/assets/logos/alpe.png", alt: "Alpe Logo" },
  { src: "/assets/logos/dacia.png", alt: "Dacia Logo" },
  { src: "/assets/logos/silva.png", alt: "Silva Logo" },
  { src: "/assets/logos/stf.png", alt: "Stf Logo" },
  { src: "/assets/logos/lactigo.png", alt: "Lactigo Logo" },
  { src: "/assets/logos/realTurmat.png", alt: "Real Turmat Logo" },
  { src: "/assets/logos/sidas.png", alt: "Sidas Logo" },
];

const logos = [...baseLogos, ...baseLogos, ...baseLogos];

export default function ScrollingLogos() {
  return (
    <div className="w-full overflow-hidden py-10 md:py-15 relative items-center bg-black">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "scroll 60s linear infinite",
          width: "max-content",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 h-[30px] flex justify-center items-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={30}
              width={200}
              sizes="100vw"
              style={{ height: "auto" }}
              className={`h-full object-contain ${
                logo.alt === "Dacia Logo"
                  ? "max-w-[170px]"
                  : logo.alt === "Sidas Logo"
                  ? " min-h-[60px]"
                  : logo.alt === "Real Turmat Logo"
                  ? "min-h-[45px]"
                  : "w-auto"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
