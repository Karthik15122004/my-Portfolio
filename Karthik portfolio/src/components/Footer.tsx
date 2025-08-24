import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium">
            © 2024 V L Aditya Varma
          </p>
          <p className="flex items-center justify-center space-x-2 text-primary-foreground/80">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and passion for clean code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;