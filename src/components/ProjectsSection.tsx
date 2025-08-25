import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio showcasing skills, education, and experience in a clean responsive UI.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      title: "E-Commerce UI",
      description: "Frontend mockup for an e-commerce platform with product grid and shopping cart experience.",
      technologies: ["Next.js", "ShadCN UI", "Stripe API"],
    },
    {
      title: "Chat App Concept",
      description: "Prototype of a real-time chat application with group chats and instant messaging features.",
      technologies: ["Node.js", "Socket.io", "React"],
    }
  ];

  return (
    <section id="projects" className="section-padding scroll-reveal">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
