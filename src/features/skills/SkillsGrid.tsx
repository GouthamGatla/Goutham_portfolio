import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/components/animations/FadeIn";
import { Badge } from "@/shared/components/ui/Badge";
import { Card, CardContent } from "@/shared/components/ui/Card";

const SKILL_CATEGORIES = [
  {
    title: "Frontend & Mobile",
    items: ["React", "React Native", "Android", "TypeScript", "JavaScript (ES6+)", "PWAs", "Push Notifications"]
  },
  {
    title: "Styling & UI Elements",
    items: ["Tailwind CSS", "Styled Components", "Storybook", "Framer Motion"]
  },
  {
    title: "State & Architecture",
    items: ["Redux", "Redux Toolkit", "React Query", "Realm DB", "Google Maps API"]
  },
  {
    title: "Backend & Tooling",
    items: ["REST & GraphQL", "Keycloak", "JWT", "Node.js", "Git/GitHub", "CI/CD", "Maestro", "ChatGPT", "Cursor"]
  }
];

export function SkillsGrid() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Tools</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The technologies I leverage to build robust, scalable cross-platform solutions.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full bg-white/5 interactive group overflow-hidden relative">
                  {/* Spotlight Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-6 text-foreground border-b border-white/10 pb-4">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="bg-background/50 hover:bg-orange-500/20 hover:text-orange-100 hover:border-orange-500/50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
