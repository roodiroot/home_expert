/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'admin.home-expert.su',
              port: '',
              pathname: '/**',
            },
          ],
    }
};

module.exports = nextConfig;
