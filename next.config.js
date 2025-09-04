const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/SalimRajiPortfolio" : "",
  assetPrefix: isProd ? "/SalimRajiPortfolio/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;