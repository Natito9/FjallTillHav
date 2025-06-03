import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router'; 

export default function SwishPaymentButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [appLaunchMessage, setAppLaunchMessage] = useState(null);

  const router = useRouter(); 

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setPaymentUrl(null);
    setAppLaunchMessage(null);

    const uniqueCallbackId = uuidv4().replace(/-/g, '').toUpperCase();

    const paymentDetails = {
      amount: "100",
      message:"Stöd",
      callbackIdentifier: uniqueCallbackId,
    };

    try {
      const response = await fetch("/api/swish/payment-request", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.paymentUrl) {
          setPaymentUrl(data.paymentUrl);
          window.location.href = data.paymentUrl;

          setAppLaunchMessage(
            "Om Swish-appen inte öppnades, se till att den är installerad på denna enhet."
          );
          setTimeout(() => {
            router.push(`/receipt?ref=${data.id}`);
          }, 1500);
        } else {
          // This path handles immediate payment in simulator (no deep-link URL)
          setPaymentUrl(null);
          setError(null);
          alert(data.message || "Betalning behandlades framgångsrikt utan djup-länk.");
          console.log("Payment processed immediately:", data.message);
          router.push(`/receipt?ref=${data.id}`);
        }
      } else {
        setError(data.message || "Misslyckades med att initiera Swish-betalning.");
      }
    } catch (err) {
      setError("Nätverksfel eller oväntat problem: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleClick}
        disabled={loading}
        className="rounded-3xl border border-sky-800 hover:bg-sky-400 bg-sky-600 font-bold text-white text- py-3 px-12 "
        style={{ cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "Öpnnar Swish App..." : "Stöd med Swish"}
      </button>

      {error && <p className="text-red-400 w-3/4 py-5 text-center ">Fel: {error}</p>}
      {appLaunchMessage && <p className="text-gray-200 w-3/4 py-5 text-center">{appLaunchMessage}</p>}
    </div>
  );
}