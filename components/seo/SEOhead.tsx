import Head from "next/head";
import { FC } from "react";
import globalMeta from "./SEOglobal";

/**
 * SEOHeadProps
 * @param title - The title of the page.
 * @param description - The description of the page.
 * @param canonicalUrl - The canonical url of the page.
 * @param ogType - The open graph type of the page.
 * @param ogImgUrl - The open graph image url of the page.
 * @param structuredData - The structured data of the page.
 * @param children - The children of the page.
 * @returns
 * @constructor
 * @example
 *  <SEOHead
 *    canonicalUrl={globalMeta.siteUrl}
 *    structuredData={structuredLd}
 *    title="NextJs Head | SEO"
 *    description="NextJs Head, a reliable guide for how to use it and what it's really for."
 *    ogType="website"
 *  />
 */
interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImgUrl?: string;
  structuredData: string;
}

const SEOHead: FC<SEOHeadProps> = ({
  title = globalMeta.siteName,
  description = globalMeta.description,
  canonicalUrl = globalMeta.siteUrl,
  ogType = "website",
  ogImgUrl = globalMeta.siteLogo,
  structuredData,
  children,
}) => {
  return (
    <Head>
      {/*
        	Fundamental head elements important for SEO.
    	*/}
      <title>{title} </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/*
        	Icons
    	*/}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/site/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/site/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/site/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/site/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/site/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/site/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/site/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/site/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/site/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/site/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/site/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/site/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/site/favicon-16x16.png"
      />
      <link rel="manifest" href="/site/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      {/*
        	Open graph meta tags.
    	*/}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={globalMeta.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:url" content={canonicalUrl} />
      {/*
        	Structured data.
    	*/}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
        key="item-jsonld"
      />
      {children}
    </Head>
  );
};

export default SEOHead;
