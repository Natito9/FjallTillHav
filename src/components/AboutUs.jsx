import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="relative h-auto md:h-[100vh] p-9 md:p-17 flex flex-col md:flex-row items-center w-full"
    >
      <div className="w-full md:w-1/2 max-w-[900px] p-5">
        <h2 className="uppercase text-5xl font-extrabold mb-4 text-sky-900 font-[Arial Black] tracking-tight pb-3">
          Om oss
        </h2>
        <h3 className="text-2xl font-extrabold mb-4 font-[Arial Black] pb-5">
          Vi som springer är Otto Blücker och Henrik Åhlund – två vänner,
          äventyrare och grundare av ROOKIIS.
        </h3>

        <p className="pb-2">
          Vi har alltid dragits till utmaningar, till det där som kräver lite
          mer: de höga bergen, de långa lederna, de tidiga morgnarna och de sena
          kvällarna ute i naturen.
        </p>
        <p className="pb-2">
          Men den här gången handlar det inte bara om att testa våra egna
          gränser. Det handlar om att ge tillbaka. På riktigt.
        </p>
        <p className="pb-2">
          Vi springer för glaciärerna, för fjällen, för haven – och för alla som
          kommer efter oss.
        </p>
        <p className="pb-2 font-bold">
          Det här är inte bara ett lopp. Det är ett löfte.
        </p>
      </div>

      <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
        <Image
          src="/assets/FFTH5.png"
          alt="About Us Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
