import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { CustomCursor } from "@/shared/components/animations/CustomCursor";
import { ScrollProgress } from "@/shared/components/animations/ScrollProgress";

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-1 w-full pt-24">
        {children}
      </main>
      
      <footer className="w-full border-t border-white/10 py-12 mt-24">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Goutham Gatla. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:gouthamgatla888@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="https://github.com/gouthamgatla888" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/goutham-gatla/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
