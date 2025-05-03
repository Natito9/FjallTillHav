import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="relative min-h-screen p-9 md:p-17 flex flex-col md:flex-row items-center w-full"
    >
      <div className="w-full md:w-1/2 max-w-[900px] p-5 ">
        <h2 className="uppercase text-5xl font-extrabold mb-4 text-sky-900 font-[Arial Black] tracking-tight pb-3">
          Om oss
        </h2>
        <h3 className="text-2xl font-extrabold mb-4 font-[Arial Black] pb-5">
          Vi som springer är Otto Blücker och Henrik Åhlund – två vänner,
          äventyrare och grundare av ROOKIIS.
        </h3>

        <p className="pb-2">
          Vill du höra mer om våra äventyr, projekt och passion för naturen?
          Lyssna på ROOKIIS x – där vi utforskar friluftsliv, uthållighet och
          vad det innebär att ta sig an stora utmaningar, oavsett
          erfarenhetsnivå.
        </p>
        <p className="pb-2">
          Vi pratar med äventyrare, experter och rookies som delar sina
          berättelser om allt från extrema expeditioner till små vardagsäventyr.
          En podd för dig som vill inspireras, lära dig något nytt och kanske
          själv ta steget ut i det okända.
        </p>
        <div className="rounded-xl overflow-hidden mt-10">
          <iframe
            className="w-full h-[350px]"
            src="https://open.spotify.com/embed/show/10IPCGZjTK1PlLEI7JhPUX?utm_source=generator&theme=0"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:h-[800px]">
        <Image
          src="/assets/FFTH5.png"
          alt="About Us Image"
fill
          className="object-cover rounded-xl  "
          priority
        />
      </div>
    </section>
  );
}
