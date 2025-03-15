/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add TypeScript and JSX support
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Ensure webpack can process these files
  webpack(config) {
    return config;
  },
};

export default nextConfig;
