const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/Portfolio" : "",
  assetPrefix: isProd ? "/Portfolio/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;