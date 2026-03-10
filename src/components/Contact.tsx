import { ArrowUpRight } from 'lucide-react'

const LINKS = [
  { label: 'Twitter / X', href: 'https://x.com/adamfrypierce' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/adamfrypierce' },
  { label: 'Email', href: 'mailto:adam@adamfrypierce.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-5xl">
        <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-12">
          Contact
        </h2>
        <div className="flex flex-col gap-4">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-b border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-2xl font-medium group-hover:text-primary transition-colors">
                {label}
              </span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
