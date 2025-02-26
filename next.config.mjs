/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
 
  experimental: {
    turbo: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://techcraftinc.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
