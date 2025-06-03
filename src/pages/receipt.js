// pages/receipt.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ReceiptPage() {
  const router = useRouter();
  const { ref: instructionUUID } = router.query;

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This is the CRUCIAL change:
    // Only proceed if router.isReady (means query params are loaded) AND instructionUUID is actually present.
    if (!router.isReady || !instructionUUID) {
      // If router is ready but instructionUUID is still missing (e.g., navigated directly without ref),
      // then it's a real error. Otherwise, just wait for router.isReady.
      if (router.isReady && !instructionUUID) {
         setLoading(false);
         setError("Fel: Ingen betalningsreferens hittades i URL:en."); // More specific error message
      }
      return; // Exit useEffect if not ready or no UUID
    }

    // Reset states here to ensure a clean fetch if dependencies change
    setLoading(true);
    setError(null);

    const fetchPaymentStatus = async () => {
      try {
        const res = await fetch(`/api/swish/status?id=${instructionUUID}`);
        const data = await res.json();

        if (res.ok) {
          setPaymentStatus(data.status);
        } else {
          setError(data.message || "Kunde inte hämta betalningsstatus.");
        }
      } catch (err) {
        setError("Nätverksfel vid hämtning av status: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus(); // Call the fetch function only when conditions are met

  }, [instructionUUID, router.isReady]); // Dependencies: re-run if UUID changes or router becomes ready

  if (loading) {
    return <div className="text-center py-10">Laddar betalningsstatus...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center py-10">Fel: {error}</div>;
  }

  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold">Betalningsstatus för #{instructionUUID}</h1>
      {paymentStatus === 'PAID' && (
        <p className="text-green-600 text-xl mt-4">Betalningen lyckades!</p>
      )}
      {paymentStatus === 'DECLINED' && (
        <p className="text-red-600 text-xl mt-4">Betalningen misslyckades. Vänligen försök igen.</p>
      )}
      {paymentStatus === 'CANCELLED' && (
        <p className="text-yellow-600 text-xl mt-4">Betalningen avbröts av användaren.</p>
      )}
      {/* If paymentStatus is still null or unexpected after loading */}
      {!paymentStatus && (
          <p className="text-gray-200 text-xl mt-4">Status ej tillgänglig än, vänligen försök igen senare.</p>
      )}
    </div>
  );
}