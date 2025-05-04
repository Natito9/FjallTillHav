import Image from "next/image";

export default function FundingLevels() {
    return (
      <section className="relative h-auto ]md:h-[90vh] px-4 py-15 md:p-17 flex justify-center md:justify-end items-center w-full"
      style={{
        background: 'rgba(0, 0, 0, 0.3)'
      }}>
             <Image
                          src="/assets/FFTH3.jpg"
                          alt="Background"
                          fill
                          priority
                          className="object-cover object-center -z-10"
                        />
        <div className="text-black flex flex-col w-[90%] md:w-[50%] max-w-[900px] bg- backdrop-blur-xs">
          <h2 className="uppercase text-5xl md:text-5xl font-extrabold mb-4 text-white font-[Arial Black] tracking-tight pb-5">
          Ditt Stöd Gör Skillnad
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-left text-white">
          <div className="mb-8 md:w-1/2">
            <h3 className="text-4xl">100 - 500kr</h3>
            <h4 className="text-2xl mb-2">Med stöd från</h4>
            <p>Ditt namn i dokumentärens eftertexter.</p>
          </div>
          <div className="mb-8 md:w-1/2">
            <h3 className="text-4xl ">501 - 1000kr</h3>
            <h4 className="text-2xl mb-2">Tack till</h4>
            <p>Ditt namn i större typsnitt.</p>
          </div>
          <div className="mb-8 md:w-1/2">
            <h3 className="text-4xl ">1001 – 5000kr</h3>
            <h4 className="text-2xl mb-2">Speciellt tack till</h4>
            <p>+ inbjudan som gäst i vår podcast &quot;ROOKIIS x&quot; samt förhandsvisning av dokumentären.</p>
          </div>
          <div className="mb-8 md:w-1/2">
            <h3 className="text-4xl ">5001 – 10 000 kr</h3>
            <h4 className="text-2xl mb-2">Medproducent* på dokumentären</h4>
            <p>+ inbjudan till en exklusiv förhandsvisning av dokumentären i Stockholm.</p>
          </div>
        </div>
      </div>
      </section>
    );
}
