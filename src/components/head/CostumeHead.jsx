import Head from "next/head";
import Script from "next/script";

export default function CustomHead() {
  return (
    <>
      <Head>
        <title>Från Fjäll Till Hav</title>
        <meta
          name="description"
          content="Från Fjäll till Hav,  Den 8 juli startar vår utmaning: att springa hela Kungsleden – över 440 kilometer genom Sveriges vildaste natur."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="glaciärer, klimatförändring, miljöprojekt, miljödokumentär, skydda naturen, donation klimat, Kungsleden löpning, ultralöpning Sverige, Hands2Ocean, löparutmaning Sverige"
        />
        <meta name="author" content="Rookiis Team" />

        <meta property="og:title" content="Från Fjäll Till Hav – Hem" />
        <meta
          property="og:description"
          content="Den 8 juli startar vår utmaning: att springa hela Kungsleden."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.franfjalltillhav.se/" />
        <meta
          property="og:image"
          content="https://www.franfjalltillhav.se/assets/Img-social-card.png"
        />

        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="sv" />

        <link rel="canonical" href="https://www.franfjalltillhav.se/" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6S8SWDLR0R"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6S8SWDLR0R');
          `,
        }}
      />
    </>
  );
}
