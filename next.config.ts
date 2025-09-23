import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração para Docker standalone
  output: 'standalone',
  
  // Otimizações para produção
  compress: true,
  
  // Configurações de imagem
  images: {
    unoptimized: false,
    domains: ['images.unsplash.com'],
  },
  turbopack: {
    resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  // Configurações de experimental features
  experimental: {
    // Otimizações de performance
    optimizeCss: true,
  },
  
  // Configurações de webpack para Three.js
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
