import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export a static site for GitHub Pages.
  output: "export",
  basePath: "/my-link",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
