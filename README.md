# Pedro d’Alma — Site (Next.js + Tailwind) 

Framework: **Next.js 14 (App Router)** com **TailwindCSS**. Preparado para **export estático** (sem servidor) — ideal para **Cloudflare Pages (plano gratuito)**.

## Requisitos
- Node 18+
- npm

## Instalar e correr localmente
```bash
npm install
npm run dev
# abre em http://localhost:3000
```

## Build estático (para Cloudflare Pages / GitHub Pages)
```bash
npm run build
# gera a pasta "out" (ficheiros estáticos)
```
No Cloudflare Pages, define:
- **Build command**: `npm run build`
- **Output directory**: `out`

## Personalização
- Texto e secções: `app/page.tsx` 
- Meta/SEO: `app/layout.tsx`
- Estilos globais: `app/globals.css`
- Imagens: `public/cover-placeholder.jpg`, `public/og-image.png`

Substitui `cover-placeholder.jpg` pela tua capa do *Simbiose* mantendo o nome do ficheiro (ou altera o `src` na `page.tsx`).

## Formulário de contacto
Está pronto visualmente. Para funcionar, liga a um serviço gratuito (ex.: Formspree) ou cria um **Cloudflare Worker** para receber as submissões.

## Domínio
Depois de fazeres deploy no Pages, adiciona `pedrodalma.pt` em **Custom domains** (no projeto Pages). O SSL é automático.
