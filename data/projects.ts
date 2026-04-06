export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  thumbnail: string
  techStack: string[]
  overview: string
  howBuilt: string
  keyFeatures: string[]
  links: {
    github?: string
    demo?: string
    linkedin?: string
  }
  order: number
}

export const projects: Project[] = [
  {
    slug: 'ai-tool-01',
    title: 'AI Tool 01',
    tagline: 'Placeholder — supply chain AI project',
    description: 'An AI-native tool that solves a critical bottleneck in supply chain operations, reducing manual effort and improving forecast accuracy.',
    thumbnail: '/images/project-placeholder.png',
    techStack: ['Python', 'OpenAI API', 'Next.js', 'PostgreSQL'],
    overview: 'Placeholder overview. Describe what this project does and the problem it solves for supply chain teams.',
    howBuilt: 'Placeholder. Describe the tech stack, architecture decisions, and how the system was designed and built.',
    keyFeatures: [
      'Feature one — describe a key capability',
      'Feature two — describe another key capability',
      'Feature three — describe a third key capability',
    ],
    links: {
      github: 'https://github.com/aditya',
    },
    order: 1,
  },
  {
    slug: 'ai-tool-02',
    title: 'AI Tool 02',
    tagline: 'Placeholder — data analytics project',
    description: 'A data pipeline that processes operational data and surfaces actionable insights for supply chain decision-makers.',
    thumbnail: '/images/project-placeholder.png',
    techStack: ['Python', 'Pandas', 'Tableau', 'SQL'],
    overview: 'Placeholder overview. Describe the data problem this project addresses.',
    howBuilt: 'Placeholder. Describe the pipeline architecture and key technical decisions.',
    keyFeatures: [
      'Feature one placeholder',
      'Feature two placeholder',
      'Feature three placeholder',
    ],
    links: {},
    order: 2,
  },
  {
    slug: 'ai-tool-03',
    title: 'AI Tool 03',
    tagline: 'Placeholder — automation project',
    description: 'An automation workflow that eliminates repetitive manual work and connects disparate supply chain systems.',
    thumbnail: '/images/project-placeholder.png',
    techStack: ['n8n', 'Python', 'Claude API'],
    overview: 'Placeholder overview. Describe what was automated and the business impact.',
    howBuilt: 'Placeholder. Describe the workflow design and integrations.',
    keyFeatures: [
      'Feature one placeholder',
      'Feature two placeholder',
      'Feature three placeholder',
    ],
    links: {},
    order: 3,
  },
  {
    slug: 'ai-tool-04',
    title: 'AI Tool 04',
    tagline: 'Placeholder — supply chain optimization',
    description: 'A model that optimizes inventory and procurement decisions using operations research and machine learning.',
    thumbnail: '/images/project-placeholder.png',
    techStack: ['Python', 'OR-Tools', 'Streamlit'],
    overview: 'Placeholder overview. Describe the optimization problem and approach.',
    howBuilt: 'Placeholder. Describe the model, constraints, and how it was built.',
    keyFeatures: [
      'Feature one placeholder',
      'Feature two placeholder',
      'Feature three placeholder',
    ],
    links: {},
    order: 4,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null
  next: Project | null
} {
  const sorted = [...projects].sort((a, b) => a.order - b.order)
  const index = sorted.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? sorted[index - 1] : null,
    next: index < sorted.length - 1 ? sorted[index + 1] : null,
  }
}
