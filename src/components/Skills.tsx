import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, BarChart3, Brain, Globe, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Database,
      title: "Libraries & Tools",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Power BI", "Jupyter Notebook"],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: BarChart3,
      title: "Data Science Concepts",
      skills: ["Data Cleaning", "EDA", "Data Visualization", "ML (Supervised/Unsupervised)", "Clustering", "NLP", "Model Evaluation"],
      color: "bg-success/10 text-success"
    },
    {
      icon: Brain,
      title: "Databases & Others",
      skills: ["MySQL", "MongoDB (basic)", "Git", "Excel", "Dashboard Design", "Problem Solving"],
      color: "bg-info/10 text-info"
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: ["Communication & Data Storytelling", "Analytical Thinking", "Time Management", "Leadership & Collaboration"],
      color: "bg-warning/10 text-warning"
    },
    {
      icon: Globe,
      title: "Languages",
      skills: ["English (Fluent)", "Telugu (Native)", "Hindi (Conversational)", "Tamil (Conversational)"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in data science, analytics, and modern development tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${category.color} group-hover:scale-110 transition-smooth`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Python Programming", level: 90 },
              { skill: "Data Analysis", level: 85 },
              { skill: "Machine Learning", level: 80 },
              { skill: "Data Visualization", level: 88 },
              { skill: "SQL & Databases", level: 82 },
              { skill: "Power BI", level: 85 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="gradient-hero h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;