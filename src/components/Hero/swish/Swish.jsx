import QrCode from "./QrCode"
import SwishPaymentButton from "./SwishPaymentButton";

export default function Swish() {


  return (
    <div className="flex flex-col justify-center items-center text-center text-white h-auto gap-7">
      {/* <SwishPaymentButton/> */}
      <QrCode />
      
    </div>
  );
}
