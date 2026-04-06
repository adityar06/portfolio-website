import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <footer className="text-center text-text-muted font-mono text-xs py-12 border-t border-white/5">
        © {new Date().getFullYear()} Aditya Kumar — Built with Next.js
      </footer>
    </main>
  )
}
