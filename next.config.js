/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheHandler: require.resolve('./cache-handler.js'),
  env: {
    NEXT_PUBLIC_REDIS_INSIGHT_URL: process.env.REDIS_INSIGHT_URL ?? 'http://localhost:8001',
  },
};

module.exports = nextConfig;
