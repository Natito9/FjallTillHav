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
            Från Fjäll till Hav
          </h1>
  
          <h3 className=" text-white text-2xl md:text-1xl font-extrabold mb-4 font-[Arial Black] pb-5">
          Vi springer för glaciärerna
          </h3>
  
          <p className="pb-2">
          Den 8 juli knyter vi skorna i Abisko. Då startar vår utmaning: att springa hela Kungsleden – över 440 kilometer genom Sveriges vildaste natur.

          </p>
          <p className="pb-2">
          Varje krona motsvarar en meter vi springer. Pengarna går till finansieringen av dokumentären Guardians of the Glacier, och överskottet från insamlingen skänks till Hands2Ocean, en organisation som kämpar mot plastföroreningar i haven.

          </p>
          <p className="pb-2">
          Genom Från Fjäll till Hav förenar vi äventyr och engagemang.
          </p>
          <p className="pb-2">
          Tillsammans visar vi att hopp, mod och kärlek till naturen kan skapa verklig förändring.

          </p>
        </div>
      </section>
    );
  }
  