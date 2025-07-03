import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sv">
      <Head />


        <title>Från Fjäll till Hav | Ett löpäventyr för vår planets framtid</title>
  <meta
    name="description"
    content="Ett insamlingsäventyr där vi springer hela
            Kungsleden, över 440 kilometer genom Sveriges vildaste natur, för att
            sprida hopp och skapa förändring"
            url ="https://www.franfjalltillhav.se/"

  />
      <body className="antialiased">
    
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQDXHZ87"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
