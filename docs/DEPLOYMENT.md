# Deployment and Cache Management

## GitHub Pages Cache Clearing

This project is deployed to GitHub Pages and includes several mechanisms to ensure that the cache is properly cleared on each deployment.

### Cache-Busting Mechanisms

1. **Unique Build IDs**: The `next.config.js` file includes a `generateBuildId` function that creates a unique build ID for each build based on the current timestamp and a random value. This ensures that each build generates unique asset paths.

2. **`.nojekyll` File**: A `.nojekyll` file is included in the `public/` directory and is copied to the build output. This prevents GitHub Pages from processing the site with Jekyll, which can cause caching issues and file processing problems.

3. **Deployment Metadata File**: The workflow creates a `BUILD_INFO.txt` file in the output directory that contains:
   - Next.js build ID (extracted from the build output)
   - GitHub run number
   - Commit SHA
   - Deployment timestamp

### How It Works

When the project is rebuilt and deployed:

1. Next.js generates a new unique build ID (e.g., `1763892798080-i8i8xjt573`)
2. All assets are placed in a directory with this unique ID under `_next/`
3. The `.nojekyll` file ensures GitHub Pages serves the files correctly
4. The `BUILD_INFO.txt` file provides metadata about the build for debugging

This approach ensures that browsers and CDNs fetch fresh content on each deployment, eliminating stale cache issues.

### Manual Deployment

To manually trigger a deployment:
1. Go to the GitHub Actions tab
2. Select the "Deploy static content to Pages" workflow
3. Click "Run workflow"

The workflow will automatically clear the cache by generating new unique build IDs.
