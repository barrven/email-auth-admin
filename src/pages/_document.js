import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/Navbar";

export default function Document() {


  return (
    <Html lang="en">
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
