import Image from "next/image";

export default function FranfjallTillHav() {
  return (
    <section
      id="project"
      data-theme="dark"
      className="relative h-auto ]md:h-[90vh] px-4 py-15 md:p-17 flex justify-center md:justify-end items-center w-full"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Image
        src="/assets/FFTH7.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />
      <div className="  text-white relative flex flex-col items-center w-[90%] md:w-[50%] max-w-[900px] ">
        <Image
          src="/assets/FFTHOttoProfile.jpg"
          alt="Otto Buckler"
          width={200}
          height={200}
          className=" mb-4"
        
          priority
        />
        <h3 className="pb-2 uppercase ">Otto Bücker - Föreläsare</h3>
        <p className="text-center w-1/2">
          “Vi sprang över 40mil - men det största vi
hittade fanns inte på kartan.
”   </p>
      </div>
      <div className=" text-white relative flex flex-col w-[90%] md:w-[50%] max-w-[900px] bg- backdrop-blur-xs ">
        <h1 className=" uppercase text-5xl md:text-5xl font-extrabold mb-4 font-[Arial Black] tracking-tight pb-3">
          Från Fjäll till Hav
        </h1>

        <h2 className=" !text-white text-2xl md:text-1xl font-extrabold mb-4 font-[Arial Black] pb-5">
          en föreläsning om motstånd, möten och mening i rörelse
        </h2>

        <p className="pb-2">
          Vi gav oss ut på löparäventyr. Men längs vägen mötte vi något större –
          människor, uthållighet och naturens sätt att spegla vårt inre
        </p>
        <p className="pb-2">
          Det här är en föreläsning om hallucinationer, tappade tånaglar och
          oväntade skrattattacker. Men också om lugnet i fjällen, livsval bortom
          stadens brus - och hur man orkar fortsätta när det känns som att allt
          rasar.
        </p>
        <p className="pb-2">
          Perfekt för företag och organisationer som vill bjuda in till energi,
          reflektion och samtal om hållbar prestation.
        </p>
        <p className="pb-2">
          Genom att boka föreläsningen stöttar du klimatinitiativet Från Fjäll
          till Hav - en insamling till dokumentärfilm och projektet Hands 2
          Ocean, dykare som arbetar för att minska nedskräpningen i våra svenska
          vatten.
        </p>
        <p className="pb-6">
          Vi förenar äventyr med engagemang, och visar att hopp, mod och kärlek
          till naturen kan skapa verklig förändring. (Intäkterna från
          föreläsningen går till insamlingen.På så sätt blir ditt val att boka
          inte bara ett inspirationspass - utan ett konkret bidrag till
          förändring.)
        </p>
        <p className="pb-2">
          Boka via:{" "}
          <a
            href="mailto:contact@rookiis.com?subject=Vill%20gärna%20komma%20i%20kontakt"
            className="hover:underline text-white"
          >
            contact@rookiis.com
          </a>
        </p>
      </div>
    </section>
  );
}
