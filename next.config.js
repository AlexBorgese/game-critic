/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {      
        protocol: 'https',
        hostname: 'media.rawg.io',
      }
    ]
  }
}

module.exports = nextConfig
