import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import FeaturedReport from '@/components/FeaturedReport'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'
import CurrentProjects from '@/pages/CurrentProjects'

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedReport />
      <Publications />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-foreground">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current-projects" element={<CurrentProjects />} />
        </Routes>
        <footer className="px-8 md:px-16 lg:px-24 py-10 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adam Fry-Pierce
          </p>
        </footer>
      </div>
    </BrowserRouter>
  )
}
