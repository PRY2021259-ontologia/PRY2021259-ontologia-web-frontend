/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['images.squarespace-cdn.com', 'images.unsplash.com', 'blush.design'],
  },
  BASE_URL: 'https://backend-ontologia.azurewebsites.net/api/',
  //BASE_URL: 'http://localhost:5000/'
}