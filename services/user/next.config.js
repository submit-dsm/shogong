/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@package/ui"]);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
