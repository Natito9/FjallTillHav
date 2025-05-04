"use client";

import { useState } from "react";

export default function Villkor() {
  const [showSections, setShowSections] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "1. Om insamlingen",
      content: [
        "Från Fjäll till Hav är en insamling som drivs av ROOKIIS MEDIA AB, där varje insamlad krona motsvarar en meter löpning längs Kungsleden.",
        "Målet är att samla in 440 000 kronor, vilka används för att finansiera produktionen av dokumentären Guardians of the Glacier och stödja Hands2Ocean.",
        "Överskottet från insamlingen överräcks till Hands2Ocean i samband med filmens premiär.",
        "Insamlingen hanteras av ROOKIIS MEDIA AB, som ansvarar för att stödet används enligt kampanjens syfte.",
      ],
    },
    {
      title: "2. Användning av insamlade medel",
      content: [
        "Insamlade medel används för att täcka produktionskostnader för dokumentären Guardians of the Glacier, inklusive inspelning, redigering och distribution till filmfestivaler.",
        "Överskottet från insamlingen överräcks till Hands2Ocean efter att produktionskostnader är täckta.",
        "ROOKIIS MEDIA AB kan inte garantera ett specifikt belopp till Hands2Ocean.",
        "Alla transaktioner och utgifter bokförs och redovisas enligt gällande regler.",
        "Hands2Ocean offentliggörs som mottagare av stödet i samband med att överföringen sker.",
      ],
    },
    {
      title: "3. Villkor för de som stödjer projektet",
      content: [
        "Alla som stödjer insamlingen gör det frivilligt och stödet kan inte återbetalas.",
        "Stöd innebär ingen rätt till ekonomisk ersättning, intäkter eller äganderätt i dokumentären.",
        "Stöd över 100 kr ger omnämnande i eftertexter enligt stödnivå.",
        "Stöd över 5001 kr ger inbjudan till förhandsvisning i Stockholm.",
        "Rollen som medproducent är hedersbaserad och gäller endast privatpersoner.",
      ],
    },
    {
      title: "4. Transparens & Kommunikation",
      content: [
        "Vi uppdaterar löpande om insamlingens framsteg via digitala kanaler.",
        "Stödjer du kampanjen, samtycker du till att ditt namn används (eftertexter, webbsida, sociala medier etc.).",
        "För anonymitet, kontakta: contact@rookiis.com (ämne: Från Fjäll till Hav).",
      ],
    },
    {
      title: "5. Ändringar i projektet & force majeure",
      content: [
        "ROOKIIS MEDIA AB kan justera projektplanen vid behov.",
        "Vid force majeure (naturkatastrofer, lagändringar etc.) kan ändringar ske utan återbetalning.",
        "Alla ändringar kommuniceras öppet till stödjare.",
      ],
    },
  ];

  return (
    <section
      className=" p-7 md:p-20 space-y-4 flex flex-col md:justify-center items-center"
      data-theme="dark"
    >
    <div className=" w-full border-1 mb-15"></div>
      <button
        onClick={() => setShowSections(!showSections)}
        className="cursor-pointer font-semibold px-6 py-3 rounded-3xl border-1 hover:bg-sky-900 hover:border-0 hover:text-white transition max-w-[300px]"
      >
        + Allmänna villkor
      </button>

      <div
        className={`transition-all overflow-hidden duration-900 ease-in-out w-full ${
          showSections ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 max-w-[600px]">
          {sections.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="underline cursor-pointer px-4 py-1 "
              >
                {section.title}
              </button>
              <div
                className={`overflow-hidden transition-all duration-900 ease-in-out ${
                  openIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <ul className="mt-2 px-6 pb-4 list-disc pl-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
