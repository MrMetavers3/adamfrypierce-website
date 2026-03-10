const NAV_LINKS = ['Reports', 'Talks', 'Specialties', 'Current Projects', 'Contact']

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-border bg-background/80 backdrop-blur-sm">
      <span className="text-sm font-medium text-foreground">Adam Fry-Pierce</span>
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
