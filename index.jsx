export default function BikeShopLandingPage() {
  const products = [
    {
      name: 'Bicicletas completas',
      desc: 'Bikes para uso urbano, trilha e performance, prontas para você sair pedalando.',
      icon: '🚲',
    },
    {
      name: 'Peças e upgrades',
      desc: 'Componentes, upgrades e peças para montar, manter ou evoluir sua bike.',
      icon: '⚙️',
    },
    {
      name: 'Serviços completos',
      desc: 'Revisão, manutenção, montagem e qualquer tipo de serviço para sua bike.',
      icon: '🔧',
    },
  ];

  const highlights = [
    'Bikes, peças e serviços em um só lugar',
    'Atendimento rápido e direto',
    'Visual profissional e confiável',
    'Loja na Zona Norte de São Paulo',
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-zinc-100" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-zinc-300 px-4 py-1 text-sm font-medium">
                Dcycles Bike Shop
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                Sua referência em bikes na Zona Norte de São Paulo
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 md:text-lg">
                Venda de bicicletas, peças e serviços completos. A Dcycles une qualidade, confiança e atendimento direto para quem vive o pedal.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="https://instagram.com/dcyclesbikeshop"
                  target="_blank"
                  className="rounded-2xl border border-blue-700 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Ver Instagram
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-zinc-500">Destaque</p>
                <h2 className="mt-2 text-2xl font-semibold">Loja completa para ciclistas</h2>
                <p className="mt-3 text-zinc-600">
                  Tudo que você precisa em um só lugar: bikes, peças e serviços com padrão profissional.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
                    <p className="text-sm font-medium text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">O que você encontra</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Bikes, peças e serviços
          </h2>
          <p className="mt-4 text-zinc-600">
            A Dcycles atende desde quem está começando até quem busca performance, sempre com suporte completo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">{product.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Sobre a loja</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Qualidade, confiança e experiência no pedal
              </h2>
            </div>
            <div className="space-y-4 text-zinc-600">
              <p>A Dcycles está localizada na Zona Norte de São Paulo e oferece soluções completas para ciclistas.</p>
              <p>Trabalhamos com venda de bikes, peças e todos os tipos de serviço, sempre com atendimento direto e transparente.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-black via-zinc-900 to-blue-950 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Contato</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Fale com a Dcycles
              </h2>
              <p className="mt-4 max-w-xl text-blue-100">
                Entre em contato agora e faça seu orçamento ou tire suas dúvidas.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-zinc-300">Instagram</p>
                <p className="mt-1 font-medium">@dcyclesbikeshop</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-zinc-300">WhatsApp</p>
                <p className="mt-1 font-medium">(11) 94769-7362</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-zinc-300">Localização</p>
                <p className="mt-1 font-medium">Zona Norte de São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
