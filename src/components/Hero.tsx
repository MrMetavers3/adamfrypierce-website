export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-6">
          Adam Fry-Pierce
        </p>
        <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-10">
          I build the operations that let design and product teams do their best work —
          and I'm mapping what that means{' '}
          <span className="text-primary">in an agentic world.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Co-founder of DesignOps Assembly. Former Google. Author of the industry's only
          annual DesignOps benchmark. 10,000+ practitioners across two communities built from scratch.
        </p>
      </div>
    </section>
  )
}
