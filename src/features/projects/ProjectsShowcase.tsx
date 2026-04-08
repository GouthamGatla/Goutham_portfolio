import { motion } from "framer-motion"
import { portfolioData } from "@/entities/portfolio/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { ArrowRight } from "lucide-react"

export const ProjectsShowcase = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Featured Work</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full flex flex-col group hover:border-primary/50 transition-colors overflow-hidden relative">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mt-2 flex flex-col gap-4">
                    <div>
                      <ul className="text-sm text-muted-foreground mt-1 list-disc list-inside space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="line-clamp-1">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Impact</span>
                      <ul className="text-sm text-muted-foreground mt-1 list-disc list-inside space-y-1">
                        {project.impact.map((item, i) => (
                          <li key={i} className="font-medium line-clamp-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack?.map(tech => (
                        <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-sm font-medium text-primary flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
