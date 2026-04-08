import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/components/animations/FadeIn";
import { Badge } from "@/shared/components/ui/Badge";
import { Button } from "@/shared/components/ui/Button";
import { Card, CardContent } from "@/shared/components/ui/Card";
import kshemaImg from "@/assets/kshema.png";
import fieldScanImg from "@/assets/field_scan.png";


const PROJECTS = [
  {
    id: 1,
    title: "Crop Insurance Platform (Kshema App)",
    category: "Flagship App",
    shortDesc: "The flagship digital platform enabling farmers to enroll in and claim insurance with ease.",
    fullDesc: "Built the organization's core application handling crop insurance. Integrated Google Maps API to geo-tag farmland—a mission-critical capability for underwriting. Structured robust photo, video, and document capture for evidence submission. Applied Modular React Architecture and RTK for scalable backend communication.",
    impact: "Served as the primary growth engine for the organization, processing vital farmer enrollments securely via Keycloak.",
    tech: ["React Native", "Google Maps API", "Redux Toolkit", "Keycloak"],
    demo: "https://demo.com",
    image: kshemaImg
  },
  {
    id: 2,
    title: "Field Survey Application",
    category: "Offline-First",
    shortDesc: "Cross-platform mobile app empowering surveyors in rural areas with low/no connectivity.",
    fullDesc: "Designed an offline-first mobile and cross-platform web application for field agents. Utilized Realm DB for local persistence and background sync, enabling uninterrupted data collection in deep rural environments. Implemented Keycloak with PKCE flows for enterprise-grade authentication.",
    impact: "Achieved a 7× increase in farm photo review efficiency, drastically accelerating claims validation and scaling smoothly.",
    tech: ["React", "Realm DB", "Tailwind CSS", "Offline Sync"],
    demo: "https://demo.com",
    image: fieldScanImg
  },
  {
    id: 3,
    title: "PWA / Internal Operation Modules",
    category: "Internal Tools",
    shortDesc: "Cross-platform applications streamlining workflow, training, and survey management.",
    fullDesc: "Spearheaded the development of critical internal operation modules including training platforms, field agent survey management tools, and ABHA integrations. Championed design consistency by partnering with designers to build reusable UI patterns, tokens, and Storybook component libraries.",
    impact: "Significantly streamlined operations and elevated team development capability with reusable component structures across multiple internal dashboards.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    demo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
  }
];

export function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Case studies highlighting my end-to-end ownership, architectural decisions, and the resulting business impact.
              </p>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  layoutId={`project-container-${project.id}`}
                  onClick={() => setSelectedId(project.id)}
                  className="group cursor-pointer interactive"
                >
                  <Card className="h-full overflow-hidden bg-white/5 border-white/10 hover:border-green-500/50 transition-colors">
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                      <motion.img
                        layoutId={`project-image-${project.id}`}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <Badge className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white border-white/20">
                        {project.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <motion.h3
                        layoutId={`project-title-${project.id}`}
                        className="text-2xl font-bold mb-2 text-foreground group-hover:text-green-400 transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`project-desc-${project.id}`}
                        className="text-muted-foreground mb-4 line-clamp-2"
                      >
                        {project.shortDesc}
                      </motion.p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 py-12 pointer-events-none">
              <motion.div
                layoutId={`project-container-${selectedProject.id}`}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl border border-white/10 shadow-2xl pointer-events-auto"
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <motion.img
                    layoutId={`project-image-${selectedProject.id}`}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black text-white rounded-full backdrop-blur-md transition-colors interactive"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="mb-3 bg-green-500/20 text-green-300 border-green-500/30">Case Study</Badge>
                    <motion.h3
                      layoutId={`project-title-${selectedProject.id}`}
                      className="text-3xl md:text-5xl font-bold text-white mb-2"
                    >
                      {selectedProject.title}
                    </motion.h3>
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 border-b border-white/10 pb-2">The Challenge</h4>
                        <motion.p layoutId={`project-desc-${selectedProject.id}`} className="text-muted-foreground leading-relaxed">
                          {selectedProject.fullDesc}
                        </motion.p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 border-b border-white/10 pb-2 text-green-400">Business Impact</h4>
                        <p className="text-foreground leading-relaxed font-medium">
                          {selectedProject.impact}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8 bg-white/5 p-6 rounded-xl border border-white/5 h-fit">
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map(t => (
                            <Badge key={t} variant="glass" className="bg-white/10">{t}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-white/10">
                        <Button className="w-full interactive flex gap-2" variant="premium" asChild>
                          <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
