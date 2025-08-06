import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Crown, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Gold Medal - All India Art Competition",
      year: "2017",
      description: "Achieved gold medal in a prestigious national-level art competition, demonstrating creativity and artistic excellence.",
      icon: Crown,
      category: "Competition",
      color: "bg-yellow-100 text-yellow-600 border-yellow-200"
    },
    {
      title: "National Merit Scholarship (NMMS)",
      year: "Academic",
      description: "Awarded the National Merit Scholarship for outstanding academic performance and potential.",
      icon: Award,
      category: "Academic",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "District-Level Chess Competition",
      year: "Sports",
      description: "Participated and achieved recognition in district-level chess competition, showcasing strategic thinking abilities.",
      icon: Target,
      category: "Sports",
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Captain - South Zone Inter-University Volleyball",
      year: "Leadership",
      description: "Led the university volleyball team as captain in the South Zone Inter-University Tournament.",
      icon: Star,
      category: "Leadership",
      color: "bg-success/10 text-success border-success/20"
    },
    {
      title: "JEE Mains 85 Percentile",
      year: "2022",
      description: "Achieved 85 percentile in JEE Mains, demonstrating strong foundation in mathematics and science.",
      icon: Trophy,
      category: "Academic",
      color: "bg-info/10 text-info border-info/20"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in academics, competitions, and leadership activities
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className={`group hover:shadow-elegant transition-smooth ${achievement.color}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-background rounded-full">
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="bg-background/50">
                    {achievement.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg group-hover:scale-105 transition-smooth">
                  {achievement.title}
                </CardTitle>
                
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {achievement.year}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription>
                  {achievement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto p-8 gradient-card">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-8">Achievement Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <Trophy className="h-8 w-8 text-yellow-500 mx-auto" />
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">Gold Medal</div>
                </div>
                <div className="space-y-2">
                  <Award className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-accent">2</div>
                  <div className="text-sm text-muted-foreground">Academic Awards</div>
                </div>
                <div className="space-y-2">
                  <Star className="h-8 w-8 text-success mx-auto" />
                  <div className="text-2xl font-bold text-success">1</div>
                  <div className="text-sm text-muted-foreground">Leadership Role</div>
                </div>
                <div className="space-y-2">
                  <Medal className="h-8 w-8 text-info mx-auto" />
                  <div className="text-2xl font-bold text-info">85</div>
                  <div className="text-sm text-muted-foreground">JEE Percentile</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;