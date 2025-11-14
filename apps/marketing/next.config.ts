import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["@shift/ui"],
	reactStrictMode: true,
};

export default nextConfig;
