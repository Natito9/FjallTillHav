import { useState } from "react";
import Image from "next/image";

export default function Swish() {
  const [showQR, setShowQR] = useState(false);

  const toggleQR =()=> {
   setShowQR((prev=> !prev))
    }
  
  return (
    <div className="flex flex-col justify-center items-center text-center text-white h-auto md:h-[500px]">
      <button className="bg-sky-800 hover:bg-sky-950 text-white font-semibold py-3 px-6 rounded-3xl shadow-md transition-all duration-300  w-[60%] max-w-xs md:max-w-sm min-w-3 md:mb-6 cursor-pointer">
        Swisha här
      </button>
    <div className="">
      <button className="py-3 px-6 cursor-pointer rounded-3xl border-1 border-sky-800 hover:bg-sky-900  mb-4"
       onClick={toggleQR}>{showQR? "Dölj QR-kod" : "Visa QR-kode"}</button>
    
{showQR && (
       <Image
       src="/assets/ffthQR-web.png"
       alt="QR Code for Swish donation"
       width={150}
       height={150}
       className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] mb-7 md:m-0"
     />

) }
</div>
    
     </div>

  );
}
