import AuraBackground from './AuraBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 overflow-hidden">
      <AuraBackground />
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-medium leading-[1.05] tracking-tight">
          Building <span className="text-primary">products</span>
          <br />
          with <span className="text-primary">AI agents.</span>
          <br />
          I help teams to do
          <br />
          the same.
        </h1>
      </div>
    </section>
  )
}
