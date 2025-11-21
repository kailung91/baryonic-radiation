import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    productionBrowserSourceMaps: false,
    images: {
        domains: ['cdn.sanity.io', 'tiles.ipt.ua'],
    },
};

export default nextConfig;
