import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/shared/components/ui/Button";
import { Badge } from "@/shared/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/shared/components/animations/FadeIn";
import resumePdf from "@/assets/Goutham_Gatla_React and React Native.pdf";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.1]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <StaggerContainer delay={0.2}>
          <StaggerItem>
            <Badge variant="glass" className="mb-8 py-1.5 px-4 text-sm gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </Badge>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 max-w-5xl mx-auto">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Goutham Gatla
              </span>.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Results-driven Frontend Developer with 3 years of expertise in <strong className="text-white font-medium">React, React Native, and Android</strong>. I specialize in building scalable, offline-first mobile and web applications from the ground up.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="premium" className="group rounded-full px-8 interactive" asChild>
                <a href="#projects">
                  View Flagship Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5 interactive gap-2" asChild>
                <a href={resumePdf} download="Goutham_Gatla_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Floating 3D-like elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden lg:block right-[5%] top-[0%] w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10 backdrop-blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute hidden lg:block left-[10%] bottom-[20%] w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-white/10 backdrop-blur-xl"
        />
      </div>
    </section>
  );
}
