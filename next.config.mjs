/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(ttf|html)$/i,
      type: 'asset/resource'
    });
    if (isServer) {
      config.node = {
        ...config.node,
        __filename: true,
        __dirname: true,
      };
    }
    return config;
  },
  experimental: {
    serverMinification: false, // the server minification unfortunately breaks the selector class names
  },
};  

export default nextConfig;
