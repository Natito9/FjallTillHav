import Footer from "@/components/footer/Footer";
import ScrollingLogos from "@/components/Hero/ScrollingLogos";

export default function VillkorPage() {
  return (
    <section className="!text-white p-7 w-full md:p-20 space-y-6  bg-black" data-theme="dark">
      <h1 className="text-2xl font-bold mb-6 !text-white">Allmänna villkor</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2 !text-white">1. Om insamlingen</h2>
        <p>Från Fjäll till Hav är en insamling som drivs av ROOKIIS MEDIA AB, där varje insamlad krona motsvarar en meter löpning längs Kungsleden.</p>
        <p>Målet är att samla in 440 000 kronor, vilka används för att finansiera produktionen av dokumentären Guardians of the Glacier och stödja Hands2Ocean.</p>
        <p>Överskottet från insamlingen överräcks till Hands2Ocean i samband med filmens premiär.</p>
        <p>Insamlingen hanteras av ROOKIIS MEDIA AB, som ansvarar för att stödet används enligt kampanjens syfte.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 !text-white">2. Användning av insamlade medel</h2>
        <p>Insamlade medel används för att täcka produktionskostnader för dokumentären Guardians of the Glacier, inklusive inspelning, redigering och distribution till filmfestivaler.</p>
        <p>Överskottet från insamlingen överräcks till Hands2Ocean efter att produktionskostnader är täckta.</p>
        <p>ROOKIIS MEDIA AB kan inte garantera ett specifikt belopp till Hands2Ocean.</p>
        <p>Alla transaktioner och utgifter bokförs och redovisas enligt gällande regler.</p>
        <p>Hands2Ocean offentliggörs som mottagare av stödet i samband med att överföringen sker.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 !text-white">3. Villkor för de som stödjer projektet</h2>
        <p>Alla som stödjer insamlingen gör det frivilligt och stödet kan inte återbetalas.</p>
        <p>Stöd innebär ingen rätt till ekonomisk ersättning, intäkter eller äganderätt i dokumentären.</p>
        <p>Stöd över 100 kr ger omnämnande i eftertexter enligt stödnivå.</p>
        <p>Stöd över 5001 kr ger inbjudan till förhandsvisning i Stockholm.</p>
        <p>Rollen som medproducent är hedersbaserad och gäller endast privatpersoner.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 !text-white">4. Transparens & Kommunikation</h2>
        <p>Vi uppdaterar löpande om insamlingens framsteg via digitala kanaler.</p>
        <p>Stödjer du kampanjen, samtycker du till att ditt namn används (eftertexter, webbsida, sociala medier etc.).</p>
        <p>För anonymitet, kontakta: <a href="mailto:contact@rookiis.com" className="text-blue-400 underline">contact@rookiis.com</a> (ämne: Från Fjäll till Hav).</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 !text-white">5. Ändringar i projektet & force majeure</h2>
        <p>ROOKIIS MEDIA AB kan justera projektplanen vid behov.</p>
        <p>Vid force majeure (naturkatastrofer, lagändringar etc.) kan ändringar ske utan återbetalning.</p>
        <p>Alla ändringar kommuniceras öppet till stödjare.</p>
      </div>
      <ScrollingLogos />
      <Footer />
    </section>
  );
}
