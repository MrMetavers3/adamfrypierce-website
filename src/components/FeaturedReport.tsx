import { ArrowUpRight } from 'lucide-react'

const REPORTS = [
  { year: '2024', href: null },
  { year: '2023', href: null },
]

export default function FeaturedReport() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-3xl">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-8">
          Flagship Work
        </p>
        <div className="rounded-xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            DesignOps Benchmarking Report
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
            The industry's only annual, data-driven benchmark for DesignOps maturity.
            The 2024 edition surveyed 338 practitioners across 34 countries — the most
            comprehensive view of how design operations work in practice.
          </p>
          <div className="flex flex-wrap gap-3">
            {REPORTS.map(({ year, href }) =>
              href ? (
                <a
                  key={year}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {year} Report
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span
                  key={year}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-muted-foreground text-sm font-medium cursor-default"
                >
                  {year} Report
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
