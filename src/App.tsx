import AuraBackground from '@/components/AuraBackground'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import FeaturedReport from '@/components/FeaturedReport'
import Publications from '@/components/Publications'
import Section from '@/components/Section'
import Contact from '@/components/Contact'

export default function App() {
  return (
    <div className="min-h-screen text-foreground">
      <AuraBackground />
      <Nav />

      <main>
        <Hero />
        <FeaturedReport />
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
                className="px-5 py-4 rounded-lg border border-border text-sm font-medium"
              >
                {specialty}
              </div>
            ))}
          </div>
        </Section>

        <Section id="current-projects" title="Current Projects">
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Coming soon.
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
