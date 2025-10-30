import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://pedrodalma.pt'), // 👈 adicionada para remover o aviso
  title: 'Pedro d’Alma — Onde a lógica encontra a emoção',
  description:
    'Música gerada pela máquina, guiada pela poesia. Simbiose — Algoritmo & Alma.',
  openGraph: {
    type: 'website',
    url: 'https://pedrodalma.pt/',
    images: ['/og-image.png'], // => public/og-image.png
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico', // => public/favicon.ico
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body>
        <header className="sticky top-0 z-50 header-blur border-b border-white/10">
          <div className="container h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9">
                <svg viewBox="0 0 100 100" className="w-9 h-9 drop-shadow">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#87d5ff" />
                      <stop offset="100%" stopColor="#b9a6ff" />
                    </linearGradient>
                  </defs>
                  <path d="M50 84 C 30 66 16 54 16 38 C 16 26 25 18 36 18 C 43 18 47 22 50 26 C 53 22 57 18 64 18 C 75 18 84 26 84 38 C 84 54 70 66 50 84 Z" fill="url(#g)" />
                  <rect x="43" y="38" width="14" height="18" rx="2" fill="#0b1020" />
                  <g stroke="#9ae6ff" strokeWidth="2" strokeLinecap="round">
                    <line x1="50" y1="38" x2="50" y2="30" />
                    <line x1="43" y1="42" x2="36" y2="42" />
                    <line x1="57" y1="42" x2="64" y2="42" />
                    <line x1="43" y1="50" x2="36" y2="50" />
                    <line x1="57" y1="50" x2="64" y2="50" />
                    <line x1="50" y1="56" x2="50" y2="64" />
                  </g>
                </svg>
              </div>
              <div className="leading-tight">
                <p className="font-semibold tracking-tight">Pedro d’Alma</p>
                <p className="text-[11px] text-zinc-400">Simbiose — Algoritmo & Alma</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-zinc-300">
              <a href="#musica" className="hover:text-white">Música</a>
              <a href="#sobre" className="hover:text-white">Sobre</a>
              <a href="#contactos" className="hover:text-white">Contactos</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10">
          <div className="container py-8 text-sm text-zinc-400">
            © {new Date().getFullYear()} Pedro d’Alma. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
