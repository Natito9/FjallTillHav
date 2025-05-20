import Image from "next/image"

export default function Ocean() { return(
        <section id="project" data-theme="dark" className="relative h-auto  px-4 py-15 md:p-17 flex justify-center md:justify-end items-center w-full"
          style={{
            background: 'rgba(0, 0, 0, 0.3)'
          }}>
             <Image
                      src="/assets/ocean.jpg"
                      alt="Background"
                      fill
                      priority
                      className="object-cover object-center -z-10"
                    />
                <div
            className=" text-white relative flex flex-col w-[90%] md:w-[50%] max-w-[900px] bg- backdrop-blur-xs "
          >
      
              <h2 className=" !text-white uppercase text-5xl font-extrabold mb-4 tracking-tight pb-3">
              Hands 2 Ocean
              </h2>
      
              <h3 className="text-2xl font-extrabold mb-4 font-[Arial Black] pb-5">
              Hands 2 Ocean är en ideell organisation som arbetar för att skydda våra hav från plastföroreningar och bevara den marina mångfalden för framtida generationer.
    
              </h3>
              <p className="pb-2">
              Genom utbildning, praktiska insatser och samarbeten vill Hands2Ocean minska mängden plast i våra hav och öka medvetenheten om havens avgörande roll i ekosystemet.
    
              </p>
              <p className="pb-2">
              Organisationen driver projekt som kombinerar konkret miljöarbete med folkbildning – från strandstädningar och informationskampanjer till stöd för forskning om havsmiljöer.
              </p>
              <p className="pb-2">
              Deras vision är enkel men kraftfull: rena hav, ett steg i taget.
    
              </p>
              <p className="pb-2">
              När du bidrar till Från Fjäll till Hav hjälper du inte bara till att berätta viktiga historier från våra fjäll och glaciärer – du är också med och finansierar Hands2Oceans arbete för friskare, renare hav över hela världen.
              </p>
            </div>
          </section>

) }