export interface Basics {
  name: string
  role: string
  tagline: string
  email: string
  phone?: string
  location?: string
  github?: string
  linkedin?: string
  about: string
}

export interface ImpactMetric {
  label: string
  value: number
  prefix?: string
  suffix?: string
}

export interface Project {
  id: string
  title: string
  description: string
  features: string[]
  techStack?: string[]
  impact: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  location?: string
  highlights: string[]
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface PortfolioData {
  basics: Basics
  impactMetrics: ImpactMetric[]
  projects: Project[]
  experience: Experience[]
  skills: SkillCategory[]
  branding: string[]
}
