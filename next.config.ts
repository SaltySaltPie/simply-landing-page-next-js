import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         {
            // https://dyaj6jwzih5dm.cloudfront.net
            protocol: "https",
            hostname: "dyaj6jwzih5dm.cloudfront.net",
            pathname: "/**",
         },
      ],
      dangerouslyAllowSVG: true,
   },
};

export default nextConfig;
