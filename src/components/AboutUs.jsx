import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="relative min-h-screen p-9 md:p-17 md:pb-1 flex flex-col md:flex-row items-center w-full"
        style={{
              background: 'rgba(0, 0, 0, 0.3)'
            }}>
                   <Image
                                src="/assets/FFTH6test.jpg"
                                alt="Background"
                                fill
                                priority
                                className="object-cover object-center -z-10"
                              />
      <div className="w-full md:w-1/2 max-w-[900px] text-white ">
        <h2 className="uppercase text-5xl font-extrabold mb-4 tracking-tight pb-3">
          Om oss
        </h2>
        <h3 className="text-2xl font-extrabold mb-4 font-[Arial Black] pb-5">
          Vi som springer är Otto Blücker och Henrik Åhlund – två vänner,
          äventyrare och grundare av ROOKIIS.
        </h3>

        <p className="pb-2">
        Vi har alltid dragits till utmaningar, till det där som kräver lite mer: de höga bergen, de långa lederna, de tidiga morgnarna och de sena kvällarna ute i naturen.
        </p>
        <p className="pb-2">
        Men den här gången handlar det inte bara om att testa våra egna gränser. Det handlar om att ge tillbaka. På riktigt.
        </p>
        <p className="pb-2">
        Vill du höra mer om våra äventyr, projekt och passion för naturen? Lyssna på ROOKIIS x – där vi utforskar friluftsliv, uthållighet och vad det innebär att ta sig an stora utmaningar, oavsett erfarenhetsnivå.
        </p>


        <div className="flex flex-col justify-bottom md:mt-50">
        <div className="rounded-xl overflow-hidden mt-10 flex justify-center items-center">
          <iframe
            className="w-full md:w-[85%] h-[200px]"
            src="https://open.spotify.com/embed/show/10IPCGZjTK1PlLEI7JhPUX?utm_source=generator&theme=0"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        </div>
      </div>
    </section>
  );
}
