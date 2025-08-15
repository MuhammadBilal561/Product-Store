/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  devIndicators: false,
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
};

export default nextConfig;
