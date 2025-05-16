export async function createSwishPayment() {
  try {
    const res = await fetch("/api/swish/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: "10", // Replace with dynamic value if needed
        message: "Tack för din donation!",
      }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Unknown error");

    const token = data.token;
    const link = `swish://paymentrequest?token=${token}`;

    // Open Swish app (on mobile)
    if (typeof window !== "undefined" && /iPhone|Android/i.test(navigator.userAgent)) {
      window.location.href = link;
    } else {
      // Optional: return the link for QR code use
      return link;
    }
  } catch (err) {
    console.error("Swish error:", err);
    alert("Något gick fel: " + err.message);
  }
}
