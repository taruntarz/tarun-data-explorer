import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Building, Award, Play } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      title: "Summer of AI Internship",
      company: "Viswam.AI",
      status: "ongoing",
      duration: "Ongoing",
      description: "Working on cutting-edge AI projects and gaining hands-on experience in artificial intelligence and machine learning applications.",
      icon: Building,
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Data Analytics Program",
      company: "TATA GenAI",
      status: "ongoing",
      duration: "Ongoing",
      description: "Participating in comprehensive data analytics training program focusing on industry best practices and real-world applications.",
      icon: Building,
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Data Visualization Intern",
      company: "Excelerate",
      status: "ongoing",
      duration: "Ongoing",
      description: "Developing advanced data visualization solutions and creating interactive dashboards for business intelligence.",
      icon: Building,
      color: "bg-success/10 text-success border-success/20"
    },
    {
      title: "Data Analysis Intern",
      company: "APSSDC",
      status: "completed",
      duration: "Completed",
      description: "Successfully completed comprehensive data analysis internship, working on real datasets and developing analytical skills.",
      icon: Award,
      color: "bg-muted/10 text-muted-foreground border-muted/20"
    }
  ];

  return (
    <section id="internships" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Internships & Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical experience through industry partnerships and professional development programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Card key={index} className={`group hover:shadow-elegant transition-smooth ${internship.color}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-background rounded-full">
                    <internship.icon className="h-6 w-6" />
                  </div>
                  <div className="flex gap-2">
                    <Badge 
                      variant={internship.status === 'ongoing' ? 'default' : 'secondary'}
                      className="capitalize"
                    >
                      {internship.status === 'ongoing' && <Play className="h-3 w-3 mr-1" />}
                      {internship.status}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {internship.title}
                </CardTitle>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {internship.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {internship.duration}
                  </div>
                </div>
                
                <CardDescription className="mt-4">
                  {internship.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto p-8 gradient-card">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Professional Development Journey</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Active Internships & Programs</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-success">3</div>
                  <div className="text-sm text-muted-foreground">Ongoing Programs</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internships;