import AuraBackground from './AuraBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 overflow-hidden">
      <AuraBackground />
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-medium leading-[1.05] tracking-tight mb-10">
          I build products
          <br />
          with agents. I help
          <br />
          <span className="text-primary">teams do the same.</span>
        </h1>
        <div className="text-base text-muted-foreground leading-relaxed">
          <p>Building valuable products and systems with agents.</p>
          <p>Writing about what I learn.</p>
        </div>
      </div>
    </section>
  )
}
