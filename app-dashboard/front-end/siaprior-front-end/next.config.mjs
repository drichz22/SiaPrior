/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // we will use <img> tags instead of next/image for simplicity
  }
};
export default nextConfig;
