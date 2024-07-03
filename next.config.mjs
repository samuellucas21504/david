/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/david",
    output: "export",
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
        unoptimized: true
    },
    assetPrefix: "./",
};

module.exports = nextConfig;
