/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'robohash.org',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
