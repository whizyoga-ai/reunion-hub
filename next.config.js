module.exports = {
  output: 'export',
  basePath: '/reunion-hub',
  assetPrefix: '/reunion-hub/',
  trailingSlash: true,
  reactStrictMode: true,
  generateBuildId: async () => {
    // Generate a unique build ID based on current timestamp and random value
    return `${Date.now()}-${Math.random().toString(36).substring(2)}`
  },
  env: {
    BUILD_TIMESTAMP: Date.now().toString(),
  },
  images: {
    unoptimized: true, // Required for static export
  },
};
