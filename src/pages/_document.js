import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <title>Från Fjäll till Hav | Ett löpäventyr för vår planets framtid</title>
  <meta
    name="description"
    content="Ett insamlingsäventyr där vi springer hela
            Kungsleden, över 440 kilometer genom Sveriges vildaste natur, för att
            sprida hopp och skapa förändring"
            url ="https://www.franfjalltillhav.se/"
  />
  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Från Fjäll till Hav" />
  <meta
    property="og:description"
    content="Ett lopp för att rädda våra glaciärer – spring med oss från fjäll till hav!"
  />
  <meta
    property="og:image"
    content="https://yourdomain.com/assets/social-preview.jpg"
  />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Från Fjäll till Hav" />
  <meta
    name="twitter:description"
    content="Ett lopp för att rädda våra glaciärer – spring med oss från fjäll till hav!"
  />
  <meta
    name="twitter:image"
    content="https://yourdomain.com/assets/social-preview.jpg"
  />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
