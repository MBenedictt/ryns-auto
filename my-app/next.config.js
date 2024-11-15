/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '', // Leave empty if there's no specific port
        pathname: '/wikipedia/commons/**', // Adjust this pattern as needed
      },
    ],
  },
};

module.exports = nextConfig;