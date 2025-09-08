const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "" : "",
  assetPrefix: isProd ? "" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;