/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ygoprodeck.com',
        port: '',
        pathname: '/images/cards/**',
      },
    ],
  },
}
export default nextConfig;
