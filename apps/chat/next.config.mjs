/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: [
    "@saasfly/api",
    "@saasfly/auth",
    "@saasfly/db"
  ],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config; 