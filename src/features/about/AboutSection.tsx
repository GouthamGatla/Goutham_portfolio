import { motion } from "framer-motion"
import { portfolioData } from "@/entities/portfolio/data"
import { CheckCircle2 } from "lucide-react"

export const AboutSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          {portfolioData.basics.about}
        </p>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-4 text-left"
        >
          {portfolioData.branding.map((brand, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted/80 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="font-medium text-sm md:text-base leading-snug">{brand}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
