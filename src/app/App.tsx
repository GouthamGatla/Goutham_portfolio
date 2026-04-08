import React, { Suspense } from "react"
import { HeroSection } from "@/features/hero"

// Lazy loading the heavier components below the fold for performance
const AboutSection = React.lazy(() => import("@/features/about").then(m => ({ default: m.AboutSection })))
const MetricsGroup = React.lazy(() => import("@/features/metrics").then(m => ({ default: m.MetricsGroup })))
const SkillsSection = React.lazy(() => import("@/features/skills").then(m => ({ default: m.SkillsSection })))
const ProjectsShowcase = React.lazy(() => import("@/features/projects").then(m => ({ default: m.ProjectsShowcase })))
const ExperienceTimeline = React.lazy(() => import("@/features/experience").then(m => ({ default: m.ExperienceTimeline })))

function App() {
  return (
    <div className="flex flex-col gap-12 md:gap-24">
      {/* Hero section is above the fold, loaded immediately */}
      <HeroSection />
      
      {/* Everything else is lazy loaded */}
      <Suspense fallback={<div className="h-32 flex items-center justify-center text-muted-foreground animate-pulse">Loading section...</div>}>
        <AboutSection />
        <MetricsGroup />
        <SkillsSection />
        <ProjectsShowcase />
        <ExperienceTimeline />
      </Suspense>
    </div>
  )
}

export default App
