"use client";

import Link from "next/link";

export default function VillkorLink() {
  return (
    <h3 data-theme="dark">
      <Link
        href="/villkor"
        className="text-white text-lg hover:underline"
      >
       ALLMÄNNA VILLKOR
      </Link>
    </h3>
  );
}
