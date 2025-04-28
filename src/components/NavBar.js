"use client";
import { useState, useEffect} from "react";

export default function NavBar() {
  const [textColor, setTextColor] = useState("text-black");

  useEffect(() => {
    const sections = document.querySelectorAll('[data-theme]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme");
            if (theme === "dark") {
              setTextColor("text-white");
            } else if (theme === "light") {
              setTextColor("text-black");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 p-4 transition-colors backdrop-blur-md">
      <ul className="flex justify-around text-xs md:text-base font-semibold">
        <li>
          <a href="#home" className={`no-underline font-bold transition-colors px-4 py-2  ${textColor}  hover:border-b-2 `}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={`no-underline font-bold transition-colors px-4 py-2  ${textColor}  hover:border-b-2 `}>
            About
          </a>
        </li>
        <li>
          <a href="#donate" className={`no-underline font-bold transition-colors px-4 py-2  ${textColor}  hover:border-b-2 `}>
            Donate
          </a>
        </li>
      </ul>
    </nav>
  );
}
