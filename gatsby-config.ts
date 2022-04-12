import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "1234567",
        respectDNT: false,
        productionOnly: true,
      },
    },
  ],
};

export default config;
