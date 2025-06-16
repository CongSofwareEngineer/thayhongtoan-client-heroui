const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
   compiler: {
    reactRemoveProperties: true,
    styledComponents: {
      displayName: true,
      ssr: true,
      minify: true,
    },
  },
  reactStrictMode: true,
  cleanDistDir: true,
   redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // Set to true if you want a 308 permanent redirect
      },
      
    ]
  },
};

module.exports = nextConfig;
