import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import AccessibilitySection from '@/components/AccessibilitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/hooks/use-theme';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Toaster } from '@/components/ui/toaster';
import { useEffect } from 'react';

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    console.log('Portfolio loaded successfully');
    console.log('Available sections:', ['home', 'about', 'projects', 'skills', 'education', 'contact']);
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <AccessibilitySection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
