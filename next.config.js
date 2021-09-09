/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  excludeFile: (str) => /\.(stories|test)\.(js|jsx|ts|tsx)/.test(str),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.stories.tsx$/,
      loader: 'ignore-loader',
    });

    return config;
  },
};
