import Image from "next/image";

export default function SpringerSection() {
    return (
      <section className="relative h-auto ]md:h-[90vh] p-9 md:p-17 flex justify-center md:justify-start items-center w-full"
      style={{
        background: 'rgba(0, 0, 0, 0.1)'
      }}>
     
                 <Image
                          src="/assets/FFTH2.jpg"
                          alt="Background"
                          fill
                          priority
                          className="object-cover object-center -z-10"
                        />
        <div className="flex flex-col w-[90%] md:w-[50%] max-w-[900px]bg- backdrop-blur-xs  p-3">
          <h2 className="uppercase text-5xl md:text-5xl font-extrabold mb-4 text-sky-900 font-[Arial Black] tracking-tight pb-3">
          Springer för glaciärerna
          </h2>
  
          <h3 className="text-2xl md:text-1xl font-extrabold mb-4 font-[Arial Black] pb-5">
          Med start i Abisko och målgång i Hemavan.
          För varje krona vi samlar in springer vi en meter. Målet? 440 000 kronor.
          </h3>
  
          <p className="pb-2  ">
          Pengarna går till att finansiera dokumentären Guardians of the Glacier, en film om klimatförändringar och fjällvärldens framtid.
          </p>
          <p className="pb-2">
          Men inte bara det – vi stödjer också Hands2Ocean i deras arbete för att rädda våra hav.
          </p>
        </div>
      </section>
    );
  }
  