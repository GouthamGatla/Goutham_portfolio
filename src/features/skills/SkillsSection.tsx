import { motion } from "framer-motion"
import { portfolioData } from "@/entities/portfolio/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

export const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <section id="skills" className="py-20 bg-muted/30 -mx-4 px-4 md:-mx-8 md:px-8 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Technical Arsenal</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {portfolioData.skills.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
