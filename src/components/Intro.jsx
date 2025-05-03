import Image from 'next/image';

export default function Intro() {
    return (
      <section id="project" data-theme="light" className="relative h-auto ]md:h-[90vh] p-9 md:p-17 flex justify-center md:justify-end items-center w-full"
      style={{
        background: 'rgba(0, 0, 0, 0.2)'
      }}>
         <Image
                  src="/assets/FFTH1.jpg"
                  alt="Background"
                  fill
                  priority
                  className="object-cover object-center -z-10"
                />
            <div
        className=" text-white relative flex flex-col w-[90%] md:w-[50%] max-w-[900px] bg- backdrop-blur-xs  p-3"
      >
        
          <h1 className=" uppercase text-5xl md:text-5xl font-extrabold mb-4 text-sky-900 font-[Arial Black] tracking-tight pb-3">
            Från Fjäll till Hav
          </h1>
  
          <h2 className=" text-white text-2xl md:text-1xl font-extrabold mb-4 font-[Arial Black] pb-5">
            Ett löpäventyr för vår planets framtid
          </h2>
  
          <p className="pb-2">
            Från fjällens eviga snö till havets öppna vidder löper vår resa – och du
            är en del av den.
          </p>
          <p className="pb-2">
            Från Fjäll till Hav är ett insamlingsäventyr där vi springer hela
            Kungsleden, över 440 kilometer genom Sveriges vildaste natur, för att
            sprida hopp och skapa förändring
          </p>
          <p className="pb-2">
            Varje krona som skänks förvandlas till en meter vi springer, och
            överskottet från insamlingen går till Hands2Ocean – en organisation som
            kämpar för att rädda våra hav från plastföroreningar.
          </p>
          <p className="pb-2">
            Tillsammans berättar vi en större historia, en historia om mod,
            samarbete och kärleken till vår planet.
          </p>
        </div>
      </section>
    );
  }
  