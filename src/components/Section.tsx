interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-24 px-8 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-5xl">
        <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
