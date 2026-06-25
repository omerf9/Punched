const stats = [
  "Works on any Android phone",
  "Customers enrolled in under 30 seconds",
  "Set up your card in under 5 minutes",
  "No app download, ever"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-orbit-background px-6 py-8 text-orbit-text">
      <section className="mx-auto flex max-w-6xl flex-col gap-16">
        <nav className="flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight">Orbit</span>
          <a className="rounded-full border border-orbit-accent/40 px-5 py-2 text-sm font-semibold text-orbit-accent" href="/signup">
            Get started free
          </a>
        </nav>

        <div className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orbit-accent">Google Wallet loyalty cards</p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Loyalty cards your customers save to Google Wallet
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-orbit-muted">
              No app download. They scan once, collect stamps, and come back for rewards.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a className="rounded-full bg-orbit-accent px-7 py-3 font-bold text-orbit-background" href="/signup">
                Get started free
              </a>
              <span className="text-sm text-orbit-muted">Free to get started. No credit card needed.</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-orbit-accent/20 bg-orbit-card p-6 shadow-2xl shadow-black/30">
            <div className="rounded-[1.5rem] bg-orbit-accent p-6 text-orbit-background">
              <div className="text-4xl">☕</div>
              <h2 className="mt-8 text-3xl font-black">Orbit Coffee Club</h2>
              <p className="mt-2 font-semibold">4 / 10 stamps</p>
              <div className="mt-6 grid grid-cols-5 gap-3">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className={`aspect-square rounded-full border-2 border-orbit-background ${index < 4 ? "bg-orbit-background" : "bg-transparent"}`} />
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold">Reward: Free drink after 10 stamps</p>
            </div>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat} className="rounded-2xl border border-orbit-accent/10 bg-orbit-card p-5 text-sm font-semibold text-orbit-text">
              {stat}
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
