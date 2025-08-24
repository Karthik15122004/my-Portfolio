import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-accent/10">
      <Card className="max-w-3xl mx-auto border border-border shadow-2xl rounded-3xl backdrop-blur-md p-6">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-4xl font-extrabold text-foreground flex items-center justify-center space-x-3">
            <Mail className="w-8 h-8 text-accent animate-bounce" />
            <span>Let’s Connect</span>
          </CardTitle>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            I’m always excited to collaborate on <span className="text-accent font-semibold">innovative projects</span>.  
            Whether it’s a bold idea, a startup journey, or just brainstorming—let’s talk!
          </p>
        </CardHeader>

        <CardContent className="flex flex-col items-center space-y-8">
          <Button
            asChild
            size="lg"
            className="px-10 py-5 text-xl font-semibold rounded-full bg-gradient-to-r from-accent to-accent/80 text-white 
                       hover:from-accent/90 hover:to-accent/70 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <a
              href="https://forms.gle/shyCRCCQJWHbNsQ38"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Fill Out Form
            </a>
          </Button>

          <p className="text-sm text-muted-foreground italic text-center max-w-sm">
            Your message goes straight to me, and I’ll make sure to respond quickly. ✨
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;
