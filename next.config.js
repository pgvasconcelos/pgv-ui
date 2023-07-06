/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 1,

        domains: [
            "localhost",
            "res.cloudinary.com"
        ]
}
}

module.exports = nextConfig
