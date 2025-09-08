/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.apple.com",
      "electronics.sony.com",
      "www.usa.canon.com",
      "via.placeholder.com",
      "images.unsplash.com", // <- Bunu ekleyin
      "cdn.pixabay.com"
    ],
  },
};

export default nextConfig;
