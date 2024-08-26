/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheHandler: process.env.NODE_ENV === 'production' ? require.resolve('./cache-handler.js') : undefined,
  output: 'standalone', // it's required for standalone build
  cacheMaxMemorySize: 0, // disable in-memory cache
  env: {
    NEXT_PUBLIC_REDIS_INSIGHT_URL: process.env.REDIS_INSIGHT_URL ?? 'http://localhost:8001',
  },
};

module.exports = nextConfig;
