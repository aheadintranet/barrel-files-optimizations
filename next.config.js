/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  modularizeImports: {
    "@components": {
      transform: {
        Small: "@components/Small",
        Large: "@components/Large",
        Huge: "@components/Huge",
        AnotherHugeOne: "@components/sub-folder/AnotherHugeOne",
      },
      skipDefaultConversion: true,
    },
  },
};

const withStatoscope = require("next-statoscope")({
  enabled: true,
});

module.exports = withStatoscope(nextConfig);
