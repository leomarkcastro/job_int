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
      <link rel="icon" href="/favicon.ico" />

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
