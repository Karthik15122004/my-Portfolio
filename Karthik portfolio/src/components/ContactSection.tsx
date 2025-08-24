import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "adityavarma1269@gmail.com",
      href: "mailto:adityavarma1269@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9553332489",
      href: "tel:+919553332489"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "adityavarmaaa",
      href: "https://github.com/adityavarmaaa"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Lakshmana Aditya Varma Vegesna",
      href: "https://www.linkedin.com/in/lakshmana-aditya-varma-vegesna-0b6578285/"
    }
  ];

  return (
    <section id="contact" className="section-padding scroll-reveal">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Contact
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative AI projects or discuss new opportunities. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-8">Get in touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="smooth-hover border-border shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-accent">
                          {method.icon}
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <p className="font-medium text-foreground text-sm">
                            {method.label}
                          </p>
                          {method.href ? (
                            <a 
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : undefined}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-muted-foreground hover:text-accent transition-colors text-sm truncate block focus-visible"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm">
                              {method.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;