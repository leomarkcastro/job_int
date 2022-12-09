const globalMeta = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "ReactJS TSX",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com",
  canonicalUrl: process.env.NEXT_PUBLIC_CANONICAL_URL || "https://yoursite.com",
  siteLogo: process.env.NEXT_PUBLIC_SITE_LOGO || "/site/favicon.ico",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "ReactJS TSX Rest Sample",
};

export default globalMeta;
