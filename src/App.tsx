import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';

// Lazy load sections for better performance
const HeroSection = React.lazy(() => import('@/features/hero/HeroSection').then(m => ({ default: m.HeroSection })));
const ImpactSection = React.lazy(() => import('@/features/metrics/ImpactSection').then(m => ({ default: m.ImpactSection })));
const ExperienceTimeline = React.lazy(() => import('@/features/experience/ExperienceTimeline').then(m => ({ default: m.ExperienceTimeline })));
const SkillsGrid = React.lazy(() => import('@/features/skills/SkillsGrid').then(m => ({ default: m.SkillsGrid })));
const ProjectsSection = React.lazy(() => import('@/features/projects/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const ContactSection = React.lazy(() => import('@/features/contact/ContactSection').then(m => ({ default: m.ContactSection })));

const LoadingSpinner = () => (
  <div className="flex h-[200px] w-full items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

function HomePage() {
  return (
    <div className="flex flex-col gap-12 md:gap-24 overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ImpactSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ExperienceTimeline />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <SkillsGrid />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Can add dedicated /projects/:id routes later if needed */}
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
