import { ArrowDown, Download, Mail, Phone, MapPin, LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-elegant">
            <img 
              src="/lovable-uploads/dd8afa13-dba5-4086-bc3c-e606a563a0e6.png" 
              alt="Saragadam Tarun Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Saragadam Tarun
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              AI Engineer | Smart AI Agent & Gen AI Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              B.Tech Computer Science Student specializing in Data Analysis, Machine Learning, and Data Visualization
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <Card className="p-3 flex items-center gap-2 bg-card/80 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Visakhapatnam, AP</span>
            </Card>
            <Card className="p-3 flex items-center gap-2 bg-card/80 backdrop-blur-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">9392851414</span>
            </Card>
            <Card className="p-3 flex items-center gap-2 bg-card/80 backdrop-blur-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">saragadamtarun96@gmail.com</span>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://www.linkedin.com/in/saragadam-tarun-b50494336/', '_blank')}
              className="transition-smooth hover:scale-105"
            >
              <LinkedinIcon className="h-4 w-4 mr-2" />
              LinkedIn Profile
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToAbout}
              className="transition-smooth hover:scale-105"
            >
              Learn More
              <ArrowDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;