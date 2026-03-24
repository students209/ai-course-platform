/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 部署不需要 export
  // output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig