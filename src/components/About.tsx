import { GraduationCap, Brain, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Analytical Thinking",
      description: "Strong analytical mindset with expertise in data-driven decision making"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Project leadership experience and collaborative team player"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Efficient project delivery with strong organizational skills"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always updating skills with latest technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Detail-oriented and analytical B.Tech Computer Science student with hands-on experience in 
              data analysis, machine learning, and data visualization. Proficient in Python, SQL, and Power BI. 
              Strong in EDA, NLP, and dashboard development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Seeking an entry-level Data Analyst/Data Science role to contribute insights through 
              data-driven decision making. Currently pursuing my degree while gaining practical experience 
              through multiple internships and real-world projects.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Education</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-medium">B.Tech – Computer Science and Engineering</h5>
                  <p className="text-sm text-muted-foreground">Dhanalakshmi Srinivasan University, Trichy (2022–2026)</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h5 className="font-medium">JEE Mains Percentile: 85</h5>
                  <p className="text-sm text-muted-foreground">Senior Secondary, Sri Chaitanya Junior College (2020–2022)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-smooth">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {item.description}
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

export default About;