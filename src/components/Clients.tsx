const CLIENTS = [
  'Google',
  'Adobe',
  'Harley-Davidson',
  'DocuSign',
  'InVision',
  'Output',
  'Washington State University',
  'NC State University',
]

export default function Clients() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-14">
          Who I've worked with
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-xl overflow-hidden">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center px-6 py-8 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
            >
              <span className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors text-center leading-snug">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
