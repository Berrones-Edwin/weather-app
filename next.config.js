/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.weatherapi.com','upload.wikimedia.org'],
  },
}

module.exports = nextConfig
