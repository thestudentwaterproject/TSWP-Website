import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/donate",
        destination:
          "https://www.zeffy.com/en-CA/donation-form/tswp-general-donations",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
