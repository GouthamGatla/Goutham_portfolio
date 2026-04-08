import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, TrendingUp, Zap, Server } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/components/animations/FadeIn";
import { Card, CardContent } from "@/shared/components/ui/Card";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounter);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const IMPACT_METRICS = [
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    value: 50,
    suffix: "K+",
    label: "Active Users Scaling",
    description: "Scaled flagship Android & React Native apps from infancy to mass adoption."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    value: 50,
    prefix: "₹",
    suffix: "+ Cr",
    label: "Business Impact",
    description: "New business influx generated within weeks of launching the Kisan Sathi app."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    value: 7,
    suffix: "x",
    label: "Efficiency Gain",
    description: "Reduced field photo reviews time and achieved 5+ sec faster policy load times."
  },
  {
    icon: <Server className="w-8 h-8 text-purple-400" />,
    value: 100,
    suffix: "%",
    label: "Offline-First",
    description: "Utilized Realm DB and Redux Toolkit to empower rural field agents with zero connectivity."
  }
];

export function ImpactSection() {
  return (
    <section id="metrics" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-glow">
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Scale & Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world scale demonstrating the tangible value of proper architecture, geospatial integrations, and offline reliance.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_METRICS.map((metric, index) => (
              <StaggerItem key={index}>
                <Card className="h-full group hover:-translate-y-2 transition-transform duration-300 bg-white/5 interactive">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                      <AnimatedCounter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                    </h3>
                    <p className="font-medium text-foreground mb-2">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
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
