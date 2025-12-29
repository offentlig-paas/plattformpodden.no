/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily disable cacheComponents to avoid build errors
  // cacheComponents: true,
  cacheLife: {
    podcast: {
      stale: 10, // Serve stale content for 10 seconds
      revalidate: 60, // Revalidate in background after 60 seconds
      expire: 3600, // Expire after 1 hour
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.transistor.fm',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
