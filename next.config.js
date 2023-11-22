/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
  },
});
