import { useEffect, useState } from "react";

export default function DonationEmbed() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setScale(1.3); // Desktop (e.g., >= 1024px)
      } else if (width >= 768) {
        setScale(1.1); // Tablet / Medium screen (768–1023px)
      } else {
        setScale(0.98); // Mobile (<768px)
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-[301px] h-[523px] md:w-[443px] md:h-[698px] lg:w-[443px] lg:h-[797px] md:mt-20 rounded-xl overflow-hidden flex justify-center items-center">
      <iframe
        src="https://rookiis.com/ffth3-0/"
        width="100%"
        height="100%"
        title="Rookiis Donation"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          border: "none",
          width: `${100 / scale}%`,
          height: `${100 / scale}%`,
        }}
      />
    </div>
  );
}
