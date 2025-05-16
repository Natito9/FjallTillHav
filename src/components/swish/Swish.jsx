import { useState, useEffect } from "react";
import Image from "next/image";
import { createSwishPayment } from "@/components/swish/createPaymentRequest";

export default function Swish() {
  const [isMobile, setIsMobile] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobileDevice = /iPhone|Android/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
      setShowQR(!isMobileDevice);

    }
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    try {
      await createSwishPayment();
    } catch (error) {
      console.error("Error creating payment:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleQR = () => {
    setShowQR((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center text-white h-auto gap-7">
      <button
        onClick={handlePayment}
        className="bg-sky-800 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-3xl shadow-md transition-all duration-300 w-[60%] max-w-xs md:max-w-sm"
        disabled={loading}
      >
        {loading ? "Skickar..." : "Swisha här"}
      </button>

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
    </div>
  );
}
