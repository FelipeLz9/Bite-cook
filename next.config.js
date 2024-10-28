const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otras configuraciones...
};

module.exports = withNextIntl(nextConfig);