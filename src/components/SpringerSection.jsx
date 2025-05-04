import Image from "next/image";

export default function SpringerSection() {
  return (
    <section
      className=" text-white relative h-auto ]md:h-[90vh] px-4 py-15 md:p-17 flex justify-center md:justify-start items-center w-full"
      style={{
        background: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Image
        src="/assets/FFTH2.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />
      <div className="flex flex-col w-[90%] md:w-[50%] max-w-[900px]bg- backdrop-blur-xs ">
        <h2 className="uppercase text-5xl md:text-5xl font-extrabold mb-4 tracking-tight pb-3">
          Varför vi springer
        </h2>

        <h3 className="text-2xl md:text-1xl font-extrabold mb-4  pb-5">
          2025 har FN utlyst till glaciärernas år – ett globalt upprop att agera
          innan det är för sent.
        </h3>

        <p className="pb-2  ">
          Glaciärerna smälter i rekordfart, och det som sker i fjällen idag får
          konsekvenser långt bortom bergen.
        </p>
        <p className="pb-2">
          Genom Från Fjäll till Hav samlar vi in pengar till dokumentären
          Guardians of the Glacier – en berättelse om kampen för att bevara våra
          sista glaciärer.
        </p>
        <p className="pb-2">
          Vi följer äventyraren och fotografen Oskar Kihlborg, som tillsammans
          med forskare och lokala röster lägger ut gigantiska filtar över en
          smältande glaciär i Jämtlandsfjällen.
        </p>
        <p className="pb-2">
        Men filmen handlar också om
          människorna som lever nära glaciärerna – deras liv, drömmar och hur de
          påverkas när isen försvinner.
        </p>
        <p className="pb-2">
          Det här är mer än en film om klimatförändringar. Det är ett porträtt
          av mod, ansvar och hopp – mitt i en tid av förändring.
        </p>
        <p className="pb-2">
        Vi springer för att deras berättelser ska nå ut i världen. Och för att framtidens barn också ska få vandra på snöklädda toppar.
        </p>
      </div>
    </section>
  );
}
