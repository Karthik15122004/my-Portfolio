import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & AI",
      skills: ["C++ (OOPS)", "Python", "AI", "Image Processing", "Supervised Learning", "Deep Learning", "CNNs"]
    },
    {
      title: "Tools",
      skills: ["Git", "Colab Notebook", "VS Code"]
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Linux"]
    }
  ];

  const personalSkills = [
    {
      title: "Collaboration and Teamwork",
      description: "Working effectively with diverse teams to achieve common goals"
    },
    {
      title: "Self-Motivation",
      description: "Driven to continuously learn and improve without external pressure"
    },
    {
      title: "Flexibility and Adaptability",
      description: "Quickly adapting to new technologies and changing requirements"
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