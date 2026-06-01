import { ShaderBackground } from "@/components/ui/shader-background";
import { CATEGORIES } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <ShaderBackground />

      <div
        className="fixed inset-0 -z-[5] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%)" }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
        <a href="/" className="text-sm font-semibold tracking-[0.18em] uppercase text-white/80 hover:text-white transition-colors">
          Kyro
        </a>
        <div className="hidden md:flex items-center gap-8">
          {CATEGORIES.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="text-xs tracking-[0.14em] uppercase text-white/40 hover:text-white/80 transition-colors">
              {cat.label}
            </a>
          ))}
        </div>
        <a href="https://discord.gg/kyro" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.14em] uppercase text-white/40 hover:text-white/80 transition-colors">
          Discord ↗
        </a>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">Free · Open · Community</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
          <span className="block text-white">Kyro</span>
          <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a855f7 0%, #7c3aed 40%, #4f46e5 100%)" }}>
            Hub
          </span>
        </h1>
        <p className="text-sm text-white/35 max-w-xs leading-relaxed tracking-wide mb-12">
          Free games, movies, emulators &amp; tools — curated by the Kyro Discord community.
        </p>
        <a href="#games" className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white/90 transition-colors border-b border-white/15 hover:border-white/50 pb-0.5">
          Browse Resources ↓
        </a>
      </section>

      <main className="max-w-5xl mx-auto px-8 pb-40">
        {CATEGORIES.map((cat, catIdx) => (
          <section key={cat.id} id={cat.id} className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/25">0{catIdx + 1}</span>
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/25">{cat.label}</span>
            </div>
            <ul className="space-y-0">
              {cat.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between py-4 border-b border-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
                  >
                    <span className="text-2xl md:text-3xl font-light tracking-tight text-white/60 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </span>
                    <span className="flex items-center gap-4 shrink-0 ml-4">
                      {item.badge && (
                        <span className="text-[9px] tracking-[0.2em] uppercase text-purple-400/60 group-hover:text-purple-400 transition-colors hidden sm:block">
                          {item.badge}
                        </span>
                      )}
                      <span className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300 text-sm">↗</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <footer className="border-t border-white/[0.06] px-8 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/20">© 2025 Kyro — For educational purposes only</span>
          <div className="flex items-center gap-6">
            <a href="https://discord.gg/kyro" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors">Discord</a>
            <a href="https://kyro.v0x.eu" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors">Old Site</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
