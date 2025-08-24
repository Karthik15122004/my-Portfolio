import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Agentic RAG Chatbot",
      description: "Built a RAG-based chatbot with 4 modular agents using Model Context Protocol (MCP) to retrieve and answer questions from multi-format documents (PDF, DOCX, PPTX, CSV, TXT). Achieved semantic search with FAISS and SentenceTransformer, and delivered LLM-powered answers via a Streamlit UI with cited sources. Integrated PyPDF2, python-docx, and python-pptx for efficient document parsing and chunking.",
      technologies: ["Python", "FAISS", "SentenceTransformer", "Streamlit", "PyPDF2", "MCP"],
      githubUrl: "https://github.com/adityavarmaaa/rag-chatbot"
    },
    {
      title: "Generative-AI-Using-LLMS",
      description: "A unified platform offering Ask AI, Image Generator, and Recipe Generator features. Built with Spring AI, React, and the Spring Framework, it leverages Azure AI and Azure Cloud for scalability and intelligence. Users can get instant answers, create custom visuals, and generate tailored recipes with ease. Seamless API integration ensures an efficient and user-friendly experience.",
      technologies: ["Spring AI", "React", "Spring Framework", "Azure AI", "Azure Cloud"],
      githubUrl: "https://github.com/adityavarmaaa/Generative-AI-Using-LLMS"
    },
    {
      title: "Plant Disease Prediction",
      description: "Developed a CNN model for plant disease prediction, achieving 95% accuracy using the New Plant Diseases Dataset (50,000+ leaf images). The model identifies a range of plant diseases, providing a scalable solution for early detection and management. The methodology, including preprocessing, CNN architecture, and training, ensured high performance while addressing overfitting challenges.",
      technologies: ["Python", "CNN", "TensorFlow", "Deep Learning", "Image Processing"],
      githubUrl: "https://github.com/adityavarmaaa/PlantDisease"
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
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;