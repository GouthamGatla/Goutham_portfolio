import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/components/animations/FadeIn";
import { Badge } from "@/shared/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/shared/components/ui/Card";

const EXPERIENCES = [
  {
    role: "Member of Technical Staff",
    company: "Kshema General Insurance",
    period: "12/2022 - Current",
    description: "Spearheaded Android and cross-platform app development using React, React Native, and TypeScript. Engineered geospatial capabilities with Google Maps API. Optimized performance and scalability to handle hundreds of thousands of users with minimal defects. Implemented secure authentication with Keycloak and PKCE flows. Designed progressive offline-first apps leveraging Realm and Redux Toolkit.",
    skills: ["React Native", "Android", "TypeScript", "Google Maps API", "Keycloak", "Realm DB"]
  },
  {
    role: "Software Development Intern",
    company: "ITUS Insurance Brokers Pvt Ltd",
    period: "09/2022 - 11/2022",
    description: "Built responsive UI components tailored for diverse devices. Strengthened data integrity by implementing robust input validation and managing flows through query parameters and storage solutions. Accelerated operations by developing and deploying Python automation scripts.",
    skills: ["React", "JavaScript", "Python Scripts", "UI Components", "Validation"]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn direction="up">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A timeline of my career shaping digital products and leading cross-platform applications.
            </p>
          </div>
        </FadeIn>

        <div className="relative border-l border-white/10 ml-3 md:ml-0">
          <StaggerContainer>
            {EXPERIENCES.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="mb-10 ml-8 md:ml-12 relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[45px] md:-left-[57px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 ring-8 ring-background group-hover:scale-125 transition-transform duration-300"></span>
                  
                  <Card className="hover:border-purple-500/50 transition-colors bg-white/5 interactive">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <CardTitle className="text-xl md:text-2xl">{exp.role}</CardTitle>
                        <Badge variant="outline" className="w-fit">{exp.period}</Badge>
                      </div>
                      <CardDescription className="text-lg text-purple-400 font-medium">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="glass">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
