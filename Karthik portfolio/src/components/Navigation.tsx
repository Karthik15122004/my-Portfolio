import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const openResume = () => {
    window.open('https://github.com/adityavarmaaa/Resume/blob/main/V_L_A_Varma_Resume%20(1).pdf', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/111bd1fa-b996-4cf9-8f1a-2872022fef11.png" alt="AV Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-foreground">Aditya Varma</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium rounded-lg hover:bg-muted focus-visible"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={openResume}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium rounded-lg hover:bg-muted focus-visible"
            >
              Resume
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="focus-visible"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-muted focus-visible"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={openResume}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-muted focus-visible"
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;