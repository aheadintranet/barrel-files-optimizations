/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    "@components": {
      transform: {
        Small: "@components/Small",
        Large: "@components/Large",
        Huge: "@components/Huge",
        Nested: "@components/sub-folder/Nested",
      },
      skipDefaultConversion: true,
    },
  },
};

const withStatoscope = require("next-statoscope")({
  enabled: true,
});

module.exports = withStatoscope(nextConfig);
