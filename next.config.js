/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'images.pexels.com'],
      },
      eslint: {
        ignoreDuringBuilds: true,
      }
}

module.exports = nextConfig
