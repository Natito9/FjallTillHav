import Image from 'next/image';

export default function Intro() {
    return (
      <section id="project" data-theme="dark" className="relative h-auto ]md:h-[90vh] px-4 py-15 md:p-17 flex justify-center md:justify-end items-center w-full"
      style={{
        background: 'rgba(0, 0, 0, 0.3)'
      }}>
         <Image
                  src="/assets/FFTH1.jpg"
                  alt="Background"
                  fill
                  priority
                  className="object-cover object-center -z-10"
                />
            <div
        className=" text-white relative flex flex-col w-[90%] md:w-[50%] max-w-[900px] bg- backdrop-blur-xs "
      >
        
          <h1 className=" uppercase text-5xl md:text-5xl font-extrabold mb-4 font-[Arial Black] tracking-tight pb-3">
           Vi har sprungit för glaciärerna
          </h1>
  
          <h2 className=" !text-white text-2xl md:text-1xl font-extrabold mb-4 font-[Arial Black] pb-5">
       Insamlingen fortsätter
          </h2>
  
          <p className="pb-2">
          Den 10 juli snörade vi skorna i Abisko. En dryg vecka senare stod vi i Hemavan – efter att ha sprungit hela Kungsleden. Över 440 kilometer genom Sveriges vildaste natur.

          </p>
          <p className="pb-2">
          Men Från Fjäll till Hav är långt ifrån över. Insamlingen pågår till 31 december, och varje krona du bidrar med motsvarar fortfarande en meter vi sprungit.

          </p>
          <p className="pb-2">
          Pengarna går till att skapa dokumentären Guardians of the Glacier – en film om klimatförändringarna i fjällen - DU kan vara med och producera detta och sprida budskapet.

          </p>
          <p className="pb-2">
          Överskottet skänks till Hands 2 Ocean, dykare, som kämpar mot föroreningarna i våra svenska vatten.

          </p>
            <p className="pb-2">
         Vi förenar äventyr med engagemang, och visar att hopp, mod och kärlek till naturen kan skapa verklig förändring.

          </p>
        </div>
      </section>
    );
  }
  