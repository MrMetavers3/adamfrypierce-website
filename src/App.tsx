import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        <Hero />

        <Publications />

        <Section id="specialties" title="Specialties">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Design Leadership',
              'Product Strategy',
              'Design Systems',
              'UX Research',
              'Team Building',
              'Cross-functional Collaboration',
            ].map((specialty) => (
              <div
                key={specialty}
                className="px-5 py-4 rounded-lg border border-border bg-card text-sm font-medium"
              >
                {specialty}
              </div>
            ))}
          </div>
        </Section>

        <Section id="current-projects" title="Current Projects">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Coming soon — what I'm working on right now.
          </p>
        </Section>

        <Contact />
      </main>

      <footer className="px-8 md:px-16 lg:px-24 py-10 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Adam Fry-Pierce
        </p>
      </footer>
    </div>
  )
}
