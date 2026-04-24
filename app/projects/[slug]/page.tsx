import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from 'lucide-react'
import { getProjectBySlug, getAdjacentProjects, projects } from '@/data/projects'

export async function generateStaticParams() {
  return projects
    .filter((p) => p.category === 'ai-automation')
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Aditya Ratnaparkhe`,
    description: project.tagline,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(params.slug)

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/"
        className="text-text-muted hover:text-text-primary flex items-center gap-2 mb-12 font-mono text-sm transition-colors"
      >
        <ArrowLeft size={14} /> Back to Portfolio
      </Link>

      {/* Title block */}
      <h1 className="font-syne text-4xl md:text-5xl font-bold mb-3">{project.title}</h1>
      <p className="text-text-muted text-xl mb-10 leading-relaxed">{project.tagline}</p>

      {/* Demo video */}
      {project.videoSrc ? (
        <video
          src={project.videoSrc}
          controls
          className="w-full rounded-2xl mb-12 shadow-glass"
          style={{ background: '#000' }}
        />
      ) : null}

      {/* Overview / The Problem */}
      {project.overview && (
        <div className="glass rounded-2xl p-8 mb-6">
          <h2 className="font-syne text-2xl font-semibold mb-4">
            {project.sectionTitles?.overview ?? 'Overview'}
          </h2>
          {project.overview.split('\n\n').map((para, i) => (
            <p key={i} className="text-text-muted leading-relaxed mb-3 last:mb-0">{para}</p>
          ))}
        </div>
      )}

      {/* How It Was Built / How This Tool Solves It */}
      {project.howBuilt && (
        <div className="glass rounded-2xl p-8 mb-6">
          <h2 className="font-syne text-2xl font-semibold mb-4">
            {project.sectionTitles?.howBuilt ?? 'How It Was Built'}
          </h2>
          {project.howBuilt.split('\n\n').map((para, i) => (
            <p key={i} className="text-text-muted leading-relaxed mb-3 last:mb-0">{para}</p>
          ))}
        </div>
      )}

      {/* Key Features / Key Outcomes */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <div className="glass rounded-2xl p-8 mb-6">
          <h2 className="font-syne text-2xl font-semibold mb-4">
            {project.sectionTitles?.keyFeatures ?? 'Key Features'}
          </h2>
          <ul className="space-y-3">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-text-muted">
                <span className="text-accent mt-0.5 shrink-0">✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      {(project.links.github || project.links.demo || project.links.linkedin) && (
        <div className="flex flex-wrap gap-3 mb-16">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-full px-5 py-2 flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              <Code2 size={14} /> GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-full px-5 py-2 flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.links.linkedin && (
            <a
              href={project.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-full px-5 py-2 flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              <ExternalLink size={14} /> LinkedIn Post
            </a>
          )}
        </div>
      )}

      {/* Prev / Next navigation */}
      <div className="flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="glass glass-hover rounded-xl p-4 flex-1 flex items-center gap-3 max-w-[48%]"
          >
            <ArrowLeft size={16} className="text-accent shrink-0" />
            <span className="font-syne font-medium text-sm truncate">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="glass glass-hover rounded-xl p-4 flex-1 flex items-center justify-end gap-3 text-right max-w-[48%]"
          >
            <span className="font-syne font-medium text-sm truncate">{next.title}</span>
            <ArrowRight size={16} className="text-accent shrink-0" />
          </Link>
        )}
      </div>
    </main>
  )
}
