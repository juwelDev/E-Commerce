/** @type {import('next').NextConfig} */
const NEXT_URL = process.env.NEXT_URL;
const MONGO_URI = process.env.MONGO_URI;

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_URL: NEXT_URL,
    MONGO_URI: MONGO_URI,
  }
}

module.exports = nextConfig
