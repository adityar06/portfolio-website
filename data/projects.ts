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
  videoSrc?: string
  sectionTitles?: {
    overview?: string
    howBuilt?: string
    keyFeatures?: string
  }
  links: {
    github?: string
    demo?: string
    linkedin?: string
  }
  order: number
}

export const projects: Project[] = [
  {
    slug: 'supplier-discovery-ai',
    title: 'Supplier Discovery AI Tool',
    tagline: 'An AI powered supplier discovery tool that replaces hours of manual research with a single input, returning 20 scored and ranked suppliers matched against your exact sourcing criteria.',
    description: 'An AI powered supplier discovery tool that replaces hours of manual research with a single input, returning 20 scored and ranked suppliers matched against your exact sourcing criteria.',
    thumbnail: '/Supplier Discovery placeholder.jpg',
    techStack: ['Claude API', 'Tavily', 'Python', 'n8n'],
    overview: `Procurement teams consistently face three critical gaps in their supplier discovery process:\n\nMost shortlists are built on familiarity rather than market coverage, with the same supplier names appearing on every list regardless of whether better alternatives exist. Conducting a structured market search rarely fits into a compressed work week, leaving procurement managers unable to explore suppliers across different regions or price points. When an existing supplier raises a risk flag, there is no fast, structured way to identify qualified alternatives, forcing teams into reactive and often costly emergency sourcing.`,
    howBuilt: `The Supplier Discovery AI Tool automates the entire discovery process from a single input. The user enters their specific requirements including product category, target geography, required certifications, and commercial constraints. The AI combines the reasoning capability of Claude with real-time market search powered by Tavily to scan the market, identify qualified suppliers, and return a structured shortlist of 20 suppliers in minutes rather than days. Each supplier receives a fit score indicating how closely they align with the buyer's defined criteria, removing the guesswork from initial qualification.`,
    keyFeatures: [
      'Reduces supplier discovery time from several hours to under 15 minutes',
      'Delivers a ranked shortlist of 20 qualified suppliers scored against buyer-defined criteria',
      'Eliminates reliance on familiar names by surfacing alternatives across geographies and capability profiles',
      'Provides structured market intelligence that supports both strategic sourcing events and urgent supplier replacement scenarios',
    ],
    videoSrc: '/Supplier Discovery.mp4',
    sectionTitles: {
      overview: 'The Problem',
      howBuilt: 'How This Tool Solves It',
      keyFeatures: 'Key Outcomes',
    },
    links: {},
    order: 1,
  },
  {
    slug: 'supply-chain-risk-monitor',
    title: 'Supply Chain Risk Monitor AI Tool',
    tagline: 'An AI powered supplier risk monitoring tool that gives procurement teams full portfolio visibility in a single dashboard, replacing reactive crisis management with proactive early warning signals across financial, operational, geopolitical, and compliance risk dimensions.',
    description: 'An AI powered supplier risk monitoring tool that gives procurement teams full portfolio visibility in a single dashboard, replacing reactive crisis management with proactive early warning signals across financial, operational, geopolitical, and compliance risk dimensions.',
    thumbnail: '/Supply Chain Risk Monitor placeholder.jpg',
    techStack: ['Python', 'Claude API', 'Streamlit'],
    overview: `Most companies only discover a supplier is in trouble when shipments stop arriving. By that point the damage is already done, production halts, customer commitments are missed, and emergency sourcing begins at a significant cost premium. The underlying monitoring process that should prevent this remains largely manual across most procurement teams, with risk signals scattered across news feeds, ERP exports, financial databases, and supplier scorecards. Three specific gaps make this painful in practice:\n\nReactive visibility means procurement teams have no early warning system for supplier deterioration, so financial instability, delivery performance decline, and compliance gaps only surface after they have already caused disruption\n\nNo composite risk picture exists across most organizations, with risk data spread across multiple disconnected sources and no single view showing which suppliers in the portfolio need immediate attention and which are stable\n\nCoverage imbalance leaves mid-tier and tail-spend suppliers carrying significant geopolitical exposure or single-source risk completely unmonitored while intensive scrutiny goes only to the top suppliers by spend`,
    howBuilt: `The Supply Chain Risk Monitor connects directly to a supplier database and generates a comprehensive risk dashboard giving procurement managers full visibility across their entire supplier portfolio in a single view. Instead of reacting to disruptions, category managers can now spot early warning signals weeks in advance and act before the damage hits.\n\nThe dashboard assigns every supplier a composite risk score and breaks down exactly what is driving that score across four dimensions:\n\nFinancial instability signals covering revenue trajectory, credit risk indicators, and solvency flags\n\nDelivery performance trends including on-time delivery rates, lead time variance, and quality reject rates\n\nGeopolitical exposure assessed through country risk index and sanctions screening across OFAC, EU, and UN lists\n\nCompliance gaps tracked through certification status, open non-conformance reports, and audit history\n\nThe current version uses a static supplier database to demonstrate the full monitoring workflow. In a real-world deployment, this dashboard connects directly to internal ERP systems to make the data fully dynamic, with an additional tab for new supplier risk analysis ensuring complete coverage across both existing partners and potential new ones.`,
    keyFeatures: [
      'Transforms supplier risk monitoring from a reactive, crisis-driven process into a proactive, data-driven workflow',
      'Delivers a single risk dashboard across the entire supplier portfolio, eliminating the need to chase data across multiple disconnected systems',
      'Enables early intervention on at-risk suppliers before financial instability or delivery failures translate into operational disruptions',
      'Designed for ERP integration making it deployable within existing procurement technology infrastructure rather than as a standalone tool',
    ],
    videoSrc: '/Supply Chain Risk Monitor.mp4',
    sectionTitles: {
      overview: 'The Problem',
      howBuilt: 'How This Tool Solves It',
      keyFeatures: 'Key Outcomes',
    },
    links: {},
    order: 2,
  },
  {
    slug: 'ai-negotiation-prep-brief',
    title: 'AI Negotiation Prep Brief',
    tagline: 'An AI powered negotiation preparation tool that replaces four to twelve hours of manual supplier research with a single structured input, generating a comprehensive brief covering supplier financials, market intelligence, BATNA positioning, and tailored talking points in minutes.',
    description: 'An AI powered negotiation preparation tool that replaces four to twelve hours of manual supplier research with a single structured input, generating a comprehensive brief covering supplier financials, market intelligence, BATNA positioning, and tailored talking points in minutes.',
    thumbnail: '/AI Negotiation Prep Brief placeholder.jpg',
    techStack: ['Claude API', 'Python', 'n8n'],
    overview: `Before any supplier negotiation, a procurement professional needs to build a complete picture of the supplier, the market, and their own leverage position. This means pulling information from multiple disconnected sources including financial databases, news feeds, LinkedIn, industry reports, and internal contract files, and manually synthesizing it into a coherent strategy document. For a single supplier, this process takes anywhere from four to twelve hours. Three specific gaps make this painful in practice:\n\nTime compression leaves procurement teams underprepared because negotiation dates are often confirmed late, giving buyers no realistic window to conduct thorough research alongside their regular workload\n\nUneven preparation quality means a team managing forty active suppliers can only conduct deep research for the top five by spend, with everyone else receiving a recycled brief from the previous year and significant value being left on the table in mid-tier negotiations\n\nWeak BATNA positioning undermines negotiation leverage because most buyers know alternatives exist in theory but cannot name them specifically, and suppliers sense this ambiguity and price accordingly`,
    howBuilt: `The AI Negotiation Prep Brief automates the entire research and synthesis process from a single structured input. The user enters the supplier name, category, annual spend, and key commercial details. The AI agent then runs structured research across all relevant information domains and returns a comprehensive, ready-to-use negotiation brief in minutes rather than hours.\n\nThe brief covers ten critical sections that an experienced category manager would otherwise compile manually:\n\nSupplier Snapshot covering company size, ownership, revenue range, and business summary\n\nMarket Intelligence across category structure, pricing trends, supply disruptions, and macro factors\n\nFinancial Health Assessment rating the supplier as Strong, Stable, Watch, or At Risk based on revenue trajectory and risk signals\n\nAlternative Supplier Landscape identifying three to five credible alternatives with capability summaries and switching feasibility ratings that directly strengthen the buyer's BATNA\n\nSupplier Dependency Estimate analyzing how reliant the supplier is on the buyer's business or industry vertical to identify leverage opportunities\n\nThree-Tier Negotiation Objectives covering opening position, target outcome, and walk-away point across commercial levers including unit price, payment terms, contract duration, and SLA commitments\n\nBATNA Summary with a concrete alternative recommendation, execution cost assessment, and leverage implication\n\nStakeholder Intelligence identifying who the buyer is meeting, their seniority, tenure, and likely personal incentives in the negotiation\n\nRisk and Red Flags covering recent incidents, compliance issues, and an overall supplier risk rating\n\nKey Talking Points with five specific points the negotiator should lead with in the meeting\n\nThe tool can be further enhanced by connecting it to an internal supplier database, allowing the AI to analyze historical performance data alongside external market intelligence and generate a brief that reflects the actual working relationship with the supplier.`,
    keyFeatures: [
      'Reduces negotiation preparation time from four to twelve hours down to minutes, making high-quality prep accessible for every supplier regardless of spend tier',
      'Delivers a comprehensive negotiation brief covering supplier financials, market intelligence, BATNA positioning, and stakeholder analysis in a single automated workflow',
      'Strengthens procurement leverage by surfacing specific alternative suppliers with switching feasibility ratings, replacing vague BATNA awareness with concrete actionable alternatives',
      'Ensures consistent preparation quality across the entire supplier portfolio, eliminating the gap between top-tier and mid-tier supplier negotiations',
    ],
    videoSrc: '/AI Negotiation Prep Brief.mp4',
    sectionTitles: {
      overview: 'The Problem',
      howBuilt: 'How This Tool Solves It',
      keyFeatures: 'Key Outcomes',
    },
    links: {},
    order: 3,
  },
  {
    slug: 'supplier-quotation-intelligence',
    title: 'Supplier Quotation Intelligence Tool',
    tagline: 'An AI powered procurement tool that ingests multiple supplier quotations, applies weighted evaluation criteria, and generates a supplier scorecard, risk analysis, and executive recommendation memo in minutes, replacing days of manual comparison with a single automated workflow.',
    description: 'An AI powered procurement tool that ingests multiple supplier quotations, applies weighted evaluation criteria, and generates a supplier scorecard, risk analysis, and executive recommendation memo in minutes, replacing days of manual comparison with a single automated workflow.',
    thumbnail: '/Supplier Contract Intelligence placeholder.jpg',
    techStack: ['Claude API', 'Python', 'n8n'],
    overview: `Manual supplier quotation comparison is one of the most time-consuming and error-prone steps in the procurement workflow. When a sourcing event returns responses from multiple suppliers, a category manager or procurement professional must manually map every cost component, lead time, payment term, technical specification, and risk factor across each quotation into a comparison matrix, typically built from scratch in Excel. For complex categories with multiple suppliers responding, this process consumes days of strategic time that procurement teams simply cannot afford to lose.\n\nThree specific gaps make this process consistently painful across procurement teams of all sizes:\n\nManual data extraction forces procurement professionals to read through unstructured quotation documents line by line, transferring data into spreadsheets with no standardization across supplier responses, creating significant room for error and omission\n\nSubjective supplier selection means final recommendations often rely on gut feeling or familiarity rather than objective, weighted evaluation across all commercially relevant criteria including price, lead time, quality certifications, and risk factors\n\nDelayed decision making caused by the time-intensive comparison process pushes back award decisions, extends sourcing cycles, and reduces the procurement team's capacity to focus on strategic supplier relationship management`,
    howBuilt: `The Supplier Quotation Intelligence Tool transforms the entire quotation comparison process from a multi-day manual exercise into a single automated workflow. The tool operates across three structured steps that mirror how a procurement manager would ideally evaluate supplier responses, but at a fraction of the time and effort.\n\nThe user begins by setting evaluation rules, adjusting criteria weights and hard limits based on current business priorities. Price, lead time, quality certifications, payment terms, and risk factors can each be weighted to reflect what matters most for that specific sourcing event. Next, the user uploads all supplier quotations and the AI powered by Claude parses the complex, unstructured data across every document instantly, extracting and normalizing all commercially relevant fields into a structured comparison framework. Finally, the tool generates three key outputs that take the procurement professional from raw data to boardroom-ready recommendation in minutes.\n\nThe three outputs the tool delivers are:\n\nA supplier scorecard ranking every respondent against the weighted evaluation criteria with objective scoring across all commercial and technical dimensions\n\nA risk analysis flagging deviations from requested specifications, payment term variations, missing certifications, and any supplier-specific risk signals identified during parsing\n\nAn executive summary and recommendation memo formatted for senior management sign-off, translating the data-driven analysis into a clear, actionable award recommendation\n\nThe tool can be further enhanced by connecting it to an internal ERP system or supplier performance database, allowing historical delivery performance and quality data to be incorporated directly into the scoring model alongside the incoming quotation data.`,
    keyFeatures: [
      'Reduces quotation comparison time from multiple days of manual spreadsheet work to minutes of automated analysis',
      'Replaces subjective supplier selection with objective, weighted scoring across all commercially relevant criteria ensuring every recommendation is backed by data rather than familiarity',
      'Delivers a ready to use recommendation memo formatted for senior management, enabling procurement professionals to move from data entry to strategic decision making within a single workflow',
      'Provides consistent evaluation quality across every sourcing event regardless of category complexity or the number of suppliers responding',
    ],
    sectionTitles: {
      overview: 'The Problem',
      howBuilt: 'How This Tool Solves It',
      keyFeatures: 'Key Outcomes',
    },
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
