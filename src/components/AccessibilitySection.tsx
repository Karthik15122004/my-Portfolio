const AccessibilitySection = () => {
  return (
    <section className="section-padding bg-section-bg scroll-reveal">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-card rounded-2xl border border-border shadow-lg">
            <blockquote className="text-2xl italic text-center text-foreground font-medium leading-relaxed">
              "I believe technology should be intuitive and accessible to everyone. 
              Every project I build focuses on usability, clean design, and seamless 
              experiences across devices."
            </blockquote>
            <p className="text-center mt-6 text-muted-foreground font-medium text-lg">
              Building solutions that everyone can use and enjoy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
