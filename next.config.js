// next.config.js
/** @type {import('next').NextConfig} */

// nome do repositório GitHub (project page)
const repo = 'pedrodalma-next';

const nextConfig = {
  output: 'export',                 // gera HTML estático em /out
  images: { unoptimized: true },    // necessário para export estático
  trailingSlash: true,              // evita 404 no GitHub Pages
   assetPrefix: `/${repo}/`,         // prefixo dos assets (JS/CSS/imagens)
};

module.exports = nextConfig;
