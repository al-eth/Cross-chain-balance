/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_PROVIDER: process.env.API_PROVIDER
  }
};

module.exports = nextConfig;
