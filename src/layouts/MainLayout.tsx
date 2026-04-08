import { Outlet } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion"

export const MainLayout = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 rounded-r-md"
        style={{ scaleX }}
      />

      <header className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">
            goutham<span className="text-primary">.dev</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <Outlet />
      </main>

      <footer className="border-t py-8 bg-muted/40">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Goutham Gatla. Built with React & Vite.
        </div>
      </footer>
    </div>
  )
}
