import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

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

export default withNextIntl(nextConfig);
