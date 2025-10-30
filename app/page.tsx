export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="pill">Novo single disponível</span>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-3">
              Onde a <span className="grad">lógica</span> encontra a <span className="grad">emoção</span>.
            </h1>
            <p className="mt-4 text-zinc-300 md:text-lg max-w-xl">
              Música gerada pela máquina, guiada pela poesia. Um encontro entre a precisão do algoritmo e a delicadeza da palavra.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a className="btn btn-solid" href="https://open.spotify.com/intl-pt/artist/52e5GXea0K4ScETzm5UJDY" target="_blank" rel="noreferrer">
                Ouvir no Spotify
              </a>
              <a className="btn btn-ghost" href="https://www.youtube.com/@pedrodalma" target="_blank" rel="noreferrer">
                Ver no YouTube
              </a>
            </div>

            <div className="mt-4 text-zinc-400 flex items-center gap-3">
              <a className="link" href="https://open.spotify.com/intl-pt/artist/52e5GXea0K4ScETzm5UJDY" target="_blank">Spotify</a>
              <span>•</span>
              <a className="link" href="https://www.youtube.com/@pedrodalma" target="_blank">YouTube</a>
              <span>•</span>
              <a className="link" href="https://www.facebook.com/pedrodalma.oficial" target="_blank">Facebook</a>
            </div>
          </div>

          <div className="card">
            <img
              src="/pedrodalma.jpg"
              alt="Pedro d’Alma"
              className="rounded-xl w-full max-w-md mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* MÚSICA */}
      <section id="musica" className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">Spotify</h2>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1320]">
              <iframe
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/artist/52e5GXea0K4ScETzm5UJDY?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <a className="link mt-2 inline-block" href="https://open.spotify.com/intl-pt/artist/52e5GXea0K4ScETzm5UJDY" target="_blank">
              Abrir no Spotify →
            </a>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-2">YouTube</h2>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1320]">
              <iframe
                className="w-full aspect-video rounded mb-3"
                src="https://www.youtube.com/embed/OW45QfXHD2Y"
                title="Pedro d’Alma — Eclipse"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a className="link mt-2 inline-block" href="https://www.youtube.com/@pedrodalma" target="_blank">
              Abrir no YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <h2 className="section-title">Sobre</h2>
            <p>
              Pedro d’Alma é um projeto musical e literário português que une poesia, tecnologia e emoção —
              um diálogo entre a lógica e o humanismo. As canções nascem de escritos antigos que a máquina
              ajudou a despertar, devolvendo-lhes voz, som e respiração.
            </p>
            <p>
              Mais do que um exercício estético, é um encontro entre o humano e o digital: a música é gerada
              pela máquina, sob a tutela da Alma — o espaço onde a lógica e a emoção se fundem. O propósito
              é simples: provar que o futuro, mesmo digital, pode continuar a ter alma.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2">Releases</h3>
            <div className="flex items-center justify-between gap-4 py-2 border-b border-white/10">
              <div>
                <p className="font-medium">Simbiose — Algoritmo & Alma (Single)</p>
                <p className="text-sm text-zinc-400">2025 · Indie/Alt</p>
              </div>
              <a className="btn btn-ghost" href="https://open.spotify.com/intl-pt/artist/52e5GXea0K4ScETzm5UJDY" target="_blank">
                Ouvir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTOS */}
      <section id="contactos" className="section">
        <div className="container grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="section-title">Contactos</h2>
            <p className="text-zinc-300">
              Queres falar comigo, fazer parceria ou convidar para um evento? Envia mensagem.
            </p>
            <form className="mt-4 grid gap-3" name="contacto" method="post">
              <label className="grid gap-1 text-sm">
                Nome
                <input className="rounded-xl px-3 py-2 bg-[#0e1522] border border-white/20 outline-none" type="text" placeholder="O teu nome" required name="nome" />
              </label>
              <label className="grid gap-1 text-sm">
                Email
                <input className="rounded-xl px-3 py-2 bg-[#0e1522] border border-white/20 outline-none" type="email" placeholder="o.teu@email.com" required name="email" />
              </label>
              <label className="grid gap-1 text-sm">
                Mensagem
                <textarea className="rounded-xl px-3 py-2 bg-[#0e1522] border border-white/20 outline-none" name="mensagem" rows={5} placeholder="Escreve a tua mensagem" required />
              </label>
              <button className="btn btn-solid w-fit" type="submit">Enviar</button>
              <p className="text-xs text-zinc-400">* Para receber submissões, liga a Formspree ou um Cloudflare Worker gratuito.</p>
            </form>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2">Redes</h3>
            <ul className="space-y-2 text-cyan-300">
              <li><a className="hover:underline" href="https://open.spotify.com/intl-pt/artist/52e5GXea0K4ScETzm5UJDY" target="_blank">Spotify</a></li>
              <li><a className="hover:underline" href="https://www.youtube.com/@pedrodalma" target="_blank">YouTube</a></li>
              <li><a className="hover:underline" href="https://www.facebook.com/pedrodalma.oficial" target="_blank">Facebook</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}