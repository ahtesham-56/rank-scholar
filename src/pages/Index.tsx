import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Trophy, BarChart3, Shield, Users, BookOpen, FileText, Lock, Layout } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const portals = [
    {
      icon: Trophy,
      title: "CGPA Based Ranking",
      description: "View top performers ranked by cumulative GPA",
      path: "/cgpa-ranking",
    },
    {
      icon: BarChart3,
      title: "Interactive Leaderboard",
      description: "Real-time leaderboard with live performance tracking",
      path: "/interactive-leaderboard",
    },
    {
      icon: Layout,
      title: "Organized Structure",
      description: "Comprehensive student data organization and analytics",
      path: "/organized-structure",
    },
    {
      icon: Lock,
      title: "Secure Access Portal",
      description: "Protected student result verification system",
      path: "/secure-access",
    },
    {
      icon: Users,
      title: "Department-Wise View",
      description: "Browse results organized by departments",
      path: "/department-view",
    },
    {
      icon: FileText,
      title: "PDF Result Upload",
      description: "Upload results for automatic CGPA sorting",
      path: "/pdf-upload",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Academic Excellence Platform
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            A comprehensive result management system for schools and universities. Track performance, view rankings, and celebrate achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/auth">Student Login</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
              <Link to="/auth">Staff Login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">Access Portals</h2>
          <p className="text-center text-muted-foreground mb-12">Click on any portal to explore different features</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portals.map((portal, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elevated hover-scale cursor-pointer transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(portal.path)}
              >
                <CardHeader>
                  <portal.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{portal.title}</CardTitle>
                  <CardDescription>{portal.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Students Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Departments</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto shadow-elevated bg-gradient-primary">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Ready to Get Started?</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Access your results and track your academic progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/auth">Access Portal</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 Academic Excellence Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
