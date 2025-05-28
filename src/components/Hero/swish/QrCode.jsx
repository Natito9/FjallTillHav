import { useState, useEffect } from "react";
import Image from "next/image";

export default function QrCode() {
  const [isMobile, setIsMobile] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobileDevice = /iPhone|Android/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
      setShowQR(!isMobileDevice);
    }
  }, []);

  const toggleQR = () => {
    setShowQR((prev) => !prev);
  };

  return (
    <>
      <button
        className="py-2 px-6 mt-4 cursor-pointer rounded-3xl border border-sky-800 hover:bg-sky-600"
        onClick={toggleQR}
      >
        {showQR ? "Dölj QR-kod" : "Visa QR-kod"}
      </button>

      {showQR && (
        <div className="mt-4">
          <Image
            src="/assets/ffthQR-web.png"
            alt="QR Code for Swish donation"
            width={200}
            height={220}
            className="w-[150px] h-[170px] md:w-[200px] md:h-[220px]"
          />
        </div>
      )}
    </>
  );
}
