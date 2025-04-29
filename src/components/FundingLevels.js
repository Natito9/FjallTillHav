export default function FundingLevels() {
    return (
      <section className=" bg-sky-50 h-auto ]md:h-[90vh] p-9 md:p-17 flex justify-center md:justify-end items-center w-full">
        <div className="flex flex-col w-[90%] md:w-[50%] max-w-[900px]">
          <h2 className="text-5xl md:text-5xl font-extrabold mb-4 text-sky-900 font-[Arial Black] tracking-tight pb-3">
          Ditt Stöd Gör Skillnad
          </h2>
  
          <p className="pb-2 font-bold">
          💙 100 - 500kr → Ditt namn i dokumentärens eftertexter under “Med stöd från”.
          </p>
          <p className="pb-2 font-bold">
          💙 501 – 1000 kr → Ditt namn i större typsnitt under “Tack till”.
          </p>
          <p className="pb-2 font-bold">
          💙 1001 – 5000 kr → “Speciellt tack till” + inbjudan som gäst i vår podcast "ROOKIIS x" samt förhandsvisning av dokumentären.
          </p>
          <p className="pb-2 font-bold">
          💙 5001 – 10 000 kr → Medproducent* på dokumentären + inbjudan till en exklusiv förhandsvisning av dokumentären i Stockholm.
          </p>
        </div>
      </section>
    );
  }