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
if(process.env.NEXT_PUBLIC_BUILD) {
  console.log('building for production');

  nextConfig.reactStrictMode = true;
  nextConfig.cleanDistDir = true;

  nextConfig.experimental.gzipSize = true;
  nextConfig.experimental.optimizeCss = true;
  nextConfig.experimental.turbopackMinify = true;

  nextConfig.compiler.reactRemoveProperties = true;
  nextConfig.compiler.styledComponents.displayName = true;
  nextConfig.compiler.styledComponents.ssr = true;
  nextConfig.compiler.styledComponents.minify = true;


}
module.exports = nextConfig;
