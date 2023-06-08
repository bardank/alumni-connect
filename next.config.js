/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
   webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: {
                and: [/\.(js|ts|md)x?$/]
            },
            use: ['@svgr/webpack'],

        });
        return config;
    },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
