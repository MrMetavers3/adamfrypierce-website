export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-8">
          Hey, you found my site!{' '}
          <span className="text-primary">Welcome.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          I'm Adam and I like to build things. I've spent most of my career in design and design leadership.
        </p>
      </div>
    </section>
  )
}
