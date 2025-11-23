module.exports = {
  output: 'export',
  basePath: '/reunion-hub',
  assetPrefix: '/reunion-hub/',
  trailingSlash: true,
  reactStrictMode: true,
  generateBuildId: async () => {
    // Generate a unique build ID based on current timestamp
    return Date.now().toString()
  },
  images: {
    unoptimized: true, // Required for static export
  },
};
