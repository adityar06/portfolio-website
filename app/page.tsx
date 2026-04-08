import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <footer className="text-center text-text-muted font-mono text-xs py-12 border-t border-white/5">
        © {new Date().getFullYear()} Aditya Ratnaparkhe — Built with Next.js
      </footer>
    </main>
  )
}
