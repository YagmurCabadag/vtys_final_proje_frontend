import AppConfig from "@/config/AppConfig";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>{AppConfig.appName}</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
