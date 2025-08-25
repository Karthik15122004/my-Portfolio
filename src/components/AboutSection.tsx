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
              Hi, I’m <span className="font-semibold">SRK Karthik</span>, a passionate 
              <span className="font-semibold"> Full-Stack Developer</span> who loves building 
              scalable web applications and seamless digital experiences. My journey started 
              with curiosity for how web applications are built end-to-end, and over time I’ve 
              worked with technologies across both frontend and backend.
            </p>
            
            <p>
              My toolkit includes <span className="font-semibold">React, Next.js, Node.js, Express, 
              and MongoDB</span>, along with RESTful APIs and modern deployment practices. I’m also 
              exploring <span className="font-semibold">DevOps, Docker, and Cloud platforms</span> 
              to deliver robust, production-ready solutions.  
            </p>
            
            <p>
              Beyond coding, I enjoy brainstorming new project ideas, collaborating with peers, 
              and continuously learning about the latest tech trends that can make products faster, 
              smarter, and more user-friendly. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
