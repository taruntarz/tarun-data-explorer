import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, TrendingUp, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Based Job Skill Analytics System",
      description: "Developed an AI system to analyze job descriptions and resumes for skill match. Built Power BI dashboards for skill gap visualization and identified top 5 recurring skill gaps from candidate datasets.",
      role: "Project Lead",
      icon: Brain,
      technologies: ["Python", "Scikit-learn", "NLP", "Power BI"],
      highlights: [
        "AI-powered skill matching algorithm",
        "Interactive Power BI dashboards",
        "Skill gap analysis for HR insights",
        "Resume parsing and job description analysis"
      ],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Road Traffic Accident Data Analysis",
      description: "Cleaned and analyzed accident datasets to identify trends and high-risk zones. Built comprehensive dashboards highlighting accident hotspots for safety planning and policy recommendations.",
      role: "Data Analyst",
      icon: TrendingUp,
      technologies: ["Python", "Power BI", "Data Cleaning", "Statistical Analysis"],
      highlights: [
        "Comprehensive data cleaning pipeline",
        "Trend analysis and pattern recognition",
        "Geographic hotspot identification",
        "Safety recommendation dashboard"
      ],
      color: "bg-accent/10 text-accent border-accent/20"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of data science and analytics to solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-elegant transition-smooth ${project.color}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-background rounded-full">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="bg-background/50">
                    {project.role}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-medium mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new data science projects and expanding my portfolio. 
              Check back regularly for updates on my latest work in machine learning, 
              data visualization, and analytics.
            </p>
            <Button>
              <Github className="h-4 w-4 mr-2" />
              View All on GitHub
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;