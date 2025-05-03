import Image from "next/image";

export default function FundingLevels() {
    return (
      <section className="relative h-auto ]md:h-[90vh] p-9 md:p-17 flex justify-center md:justify-end items-center w-full"
      style={{
        background: 'rgba(0, 0, 0, 0.1)'
      }}>
             <Image
                          src="/assets/FFTH3.jpg"
                          alt="Background"
                          fill
                          priority
                          className="object-cover object-center -z-10"
                        />
        <div className="text-white flex flex-col w-[90%] md:w-[50%] max-w-[900px] bg- backdrop-blur-xs  p-3">
          <h2 className="uppercase text-5xl md:text-5xl font-extrabold mb-4 text-sky-900 font-[Arial Black] tracking-tight pb-3">
          Ditt Stöd Gör Skillnad
          </h2>
  
          <p className="pb-2 font-bold">
          💙 100 - 500kr → Ditt namn i dokumentärens eftertexter under &quot;Med stöd från&quot;.
          </p>
          <p className="pb-2 font-bold">
          💙 501 – 1000 kr → Ditt namn i större typsnitt under &quot;Tack till&quot;.
          </p>
          <p className="pb-2 font-bold">
          💙 1001 – 5000 kr → &quot;Speciellt tack till&quot; + inbjudan som gäst i vår podcast &quot;ROOKIIS x&quot; samt förhandsvisning av dokumentären.
          </p>
          <p className="pb-2 font-bold">
          💙 5001 – 10 000 kr → Medproducent* på dokumentären + inbjudan till en exklusiv förhandsvisning av dokumentären i Stockholm.
          </p>
        </div>
      </section>
    );
}
