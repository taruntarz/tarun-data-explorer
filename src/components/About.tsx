import { GraduationCap, Brain, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Communication & Data Storytelling"
    },
    {
      icon: Users,
      title: "Analytical Thinking & Problem-Solving"
    },
    {
      icon: Clock,
      title: "Team Collaboration & Leadership"
    },
    {
      icon: GraduationCap,
      title: "Time Management & Attention to Detail"
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
                  <h5 className="font-medium">Senior Secondary (12th) – Sri Chaitanya Junior College</h5>
                  <p className="text-sm text-muted-foreground">2020 – 2022 | JEE Mains Percentile: 85</p>
                </div>
                <div className="border-l-4 border-success pl-4">
                  <h5 className="font-medium">Secondary (10th) – ZPH School, Thotada</h5>
                  <p className="text-sm text-muted-foreground">2019 – 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-primary mb-8">Soft Skills</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="text-center space-y-4 group">
                  <div className="mx-auto p-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg leading-tight">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;