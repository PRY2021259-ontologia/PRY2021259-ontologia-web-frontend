/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['images.squarespace-cdn.com', 'images.unsplash.com', 'blush.design'],
  },
  BASE_URL_DEV: 'https://backend-ontologia.azurewebsites.net/api/',
  BASE_URL: 'https://localhost:7159/api'
}