import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Mail, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGitHub = () => {
    window.open('https://github.com/Karthik15122004', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/karthik-ramakrishna-sure/', '_blank');
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center fade-in">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-hero-primary leading-tight">
                  Hi, I'm{' '}
                  <span className="block text-accent">SRK Karthik</span>
                </h1>
                <p className="text-xl md:text-2xl text-hero-secondary leading-relaxed">
                  A Computer Science Engineer passionate about Full Stack Development and Cloud Computing. 
                  I design and build scalable web applications with modern frameworks and databases. 
                  Currently pursuing B.Tech CSE at Bennett University.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button 
                  size="lg" 
                  className="font-semibold px-8 py-4 text-lg smooth-hover focus-visible"
                  onClick={scrollToProjects}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-semibold px-8 py-4 text-lg smooth-hover focus-visible"
                  onClick={scrollToContact}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="theme-toggle"
                  onClick={openGitHub}
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="theme-toggle"
                  onClick={openLinkedIn}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="theme-toggle"
                  onClick={() => window.open('mailto:karthikramakrishna29@gmail.com', '_blank')}
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image and Brand */}
            <div className="flex-shrink-0 flex flex-col items-center space-y-6">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl smooth-hover">
                  <img 
                    src="Karthik portfolio/public/lovable-uploads/Karthik_pic.jpg" 
                    alt="Karthik Ramakrishna - Profile Picture" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Brand Logo */}
              <div className="flex items-center justify-center">
                <img 
                  src="Karthik portfolio/public/lovable-uploads/Karthik_pic.jpg" 
                  alt="AV Brand Logo" 
                  className="w-8 h-8" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;