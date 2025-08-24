const AccessibilitySection = () => {
  return (
    <section className="section-padding bg-section-bg scroll-reveal">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-card rounded-2xl border border-border shadow-lg">
            <blockquote className="text-2xl italic text-center text-foreground font-medium leading-relaxed">
              "My work follows the principle that good design includes everyone. I build projects 
              with inclusivity, accessibility, and usability at the core."
            </blockquote>
            <p className="text-center mt-6 text-muted-foreground font-medium text-lg">
              Built with care for everyone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;