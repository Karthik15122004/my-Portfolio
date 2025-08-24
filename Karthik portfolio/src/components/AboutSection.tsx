const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-bg scroll-reveal">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p className="text-xl">
              I've always been curious about how machines can learn and adapt like humans — that curiosity 
              led me into the world of AI and Deep Learning. Over time, I've worked on projects ranging 
              from agentic RAG chatbots that understand documents to Generative AI platforms that make 
              creativity more accessible.
            </p>
            
            <p>
              I enjoy building solutions that are not just technically solid but also meaningful in 
              real-world use. My toolkit spans C++, Python, CNNs, Image Processing, and cloud-based 
              AI frameworks, and I'm constantly exploring new ways to push boundaries.
            </p>
            
            <p>
              When I'm not coding or experimenting with models, I'm usually learning something new, 
              brainstorming product ideas, or collaborating with peers on innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;