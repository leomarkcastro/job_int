import { AppProps } from "next/app";
import Head from "next/head";

import "animate.css";
import "@/styles/globals.css";
import globalMeta from "@/components/seo/SEOglobal";
import SEOHead from "@/components/seo/SEOhead";

const structuredLd = JSON.stringify({
  "@context": globalMeta.canonicalUrl,
  description: "Evelan Gmbh NextJS + Typescript REST API website.",
});

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <div>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
      />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
