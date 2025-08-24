import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science and Engineering",
      institution: "Bennett University, Greater Noida",
      period: "2022–Present",
      grade: "CGPA: 7.7",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Board of Intermediate Education, A.P, Tirumala Junior College, Bhimavaram",
      period: "2020–2022",
      grade: "96.1%",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Secondary (X)",
      institution: "Board of Secondary Education, A.P, Tirumala Educational Institution, Bhimavaram",
      period: "2020",
      grade: "GPA: 10",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization",
      issuer: "DeepLearning.AI",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI, Amazon Web Services",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Natural Language Processing with Classification and Vector Spaces",
      issuer: "DeepLearning.AI",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="education" className="section-padding scroll-reveal">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Education
        </h2>

        {/* Education */}
        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="smooth-hover border-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary mt-1">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </span>
                      <span className="font-medium text-foreground">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="smooth-hover border-border shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-start space-x-3 text-base leading-tight">
                    <span className="text-primary mt-1 flex-shrink-0">
                      {cert.icon}
                    </span>
                    <span className="text-foreground">
                      {cert.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">
                    {cert.issuer}
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

export default EducationSection;