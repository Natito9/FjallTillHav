import Head from "next/head";

export default function CustomHead() {
  return (
    <Head>
   
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQDXHZ87');`,
        }}
      />

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

      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta http-equiv="Content-Language" content="sv" />

      <link rel="canonical" href="https://www.franfjalltillhav.se/" />
    </Head>
  );
}
