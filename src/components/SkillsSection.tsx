import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "ShadCN UI"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "GraphQL"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "VS Code", "Postman", "Colab Notebook", "Jira / Agile"]
    },
    {
      title: "Cloud & Deployment",
      skills: ["Docker", "Vercel", "Netlify", "AWS (EC2, S3)", "Azure Cloud"]
    },
    {
      title: "AI & Data Science",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "CNNs", "Image Processing"]
    }
  ];

  const personalSkills = [
    {
      title: "Collaboration & Teamwork",
      description: "Proven ability to work effectively within diverse, cross-functional teams to achieve project goals."
    },
    {
      title: "Problem Solving",
      description: "Strong analytical thinking and solution-oriented approach to overcome technical challenges."
    },
    {
      title: "Adaptability & Continuous Learning",
      description: "Quick to adapt to new technologies and committed to continuous professional development."
    }
  ];

  return (
    <section id="skills" className="section-padding bg-section-bg scroll-reveal">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Skills & Tools
        </h2>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="smooth-hover border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="tech-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Personal Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalSkills.map((skill, index) => (
              <Card key={index} className="smooth-hover border-border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
