import { Link } from 'react-router-dom'

const SECTION_LINKS = [
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-border bg-black/70 backdrop-blur-sm">
      <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
        Adam Fry-Pierce
      </Link>
      <ul className="hidden md:flex items-center gap-8">
        {SECTION_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </a>
          </li>
        ))}
        <li>
          <Link
            to="/current-projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Current Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}
