import { Heart, Github, LinkedinIcon, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/saragadam-tarun-b50494336",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:saragadamtarun96@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Saragadam Tarun
            </h3>
            <p className="text-sm text-muted-foreground">
              Data Science & Analytics Professional
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => window.open(link.href, '_blank')}
                className="hover:bg-primary/10 hover:text-primary transition-smooth"
              >
                <link.icon className="h-4 w-4" />
                <span className="sr-only">{link.label}</span>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by Saragadam Tarun
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Open to collaboration opportunities in Data Science, Machine Learning, and Analytics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;