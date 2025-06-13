
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ReceiptPage() {
  const router = useRouter();
  const { ref: instructionUUID } = router.query;

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!router.isReady || !instructionUUID) {
      if (router.isReady && !instructionUUID) {
        setLoading(false);
        setError("Fel: Ingen betalningsreferens hittades i URL:en.");
      }
      return;
    }

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

    fetchPaymentStatus();
  }, [instructionUUID, router.isReady]);

  if (loading) {
    return <div className="text-center py-10">Laddar betalningsstatus...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center py-10">Fel: {error}</div>;
  }

  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold">
        Betalningsstatus för #{instructionUUID}
      </h1>
      {paymentStatus === "PAID" && (
        <p className="text-green-600 text-xl mt-4">Betalningen lyckades!</p>
      )}
      {paymentStatus === "DECLINED" && (
        <p className="text-red-600 text-xl mt-4">
          Betalningen misslyckades. Vänligen försök igen.
        </p>
      )}
      {paymentStatus === "CANCELLED" && (
        <p className="text-yellow-600 text-xl mt-4">
          Betalningen avbröts av användaren.
        </p>
      )}
      {!paymentStatus && (
        <p className="text-gray-200 text-xl mt-4">
          Status ej tillgänglig än, vänligen försök igen senare.
        </p>
      )}
    </div>
  );
}
