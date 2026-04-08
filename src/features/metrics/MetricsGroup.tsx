import { useEffect, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { portfolioData } from "@/entities/portfolio/data"

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 1.5
  })
  
  const display = useTransform(spring, (current) => Math.floor(current))
  
  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, spring, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

export const MetricsGroup = () => {
  return (
    <section className="py-20 border-y border-border/40 bg-muted/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/60 mb-2">
                {metric.prefix}
                <AnimatedCounter value={metric.value} />
                {metric.suffix}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
