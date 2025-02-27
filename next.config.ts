/** @type {import('next').NextConfig} */
import { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https" as const,
                hostname: "www.watercolormanagement.com",
            },
            {
                protocol: "https" as const,
                hostname: "htmldemo.net",
            },
            {
                protocol: "https" as const,
                hostname: "media.gettyimages.com",
            },
        ],
    },
};

export default withNextIntl(nextConfig);
