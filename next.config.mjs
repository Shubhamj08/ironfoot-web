/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24,
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
    // nextScriptWorkers: true,
  },
};

export default nextConfig;
