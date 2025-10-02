import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, BookOpen, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockOrganizedData = {
  departments: [
    { name: "Computer Science", totalStudents: 450, avgCGPA: 8.45 },
    { name: "Electrical Engineering", totalStudents: 380, avgCGPA: 8.32 },
    { name: "Mechanical Engineering", totalStudents: 420, avgCGPA: 8.28 },
    { name: "Civil Engineering", totalStudents: 350, avgCGPA: 8.15 },
  ],
  semesters: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
  classes: ["Class A", "Class B", "Class C"],
};

const OrganizedStructure = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-white py-8 px-4 animate-fade-in">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold mb-2">Organized Structure</h1>
          <p className="text-white/90">Comprehensive student data organization</p>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4 space-y-6">
        <Card className="shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockOrganizedData.departments.map((dept, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bold text-lg mb-2">{dept.name}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Total Students: {dept.totalStudents}</span>
                    <span>Avg CGPA: {dept.avgCGPA}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-card animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-secondary" />
                Semester Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {mockOrganizedData.semesters.map((sem, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-muted text-center font-semibold hover:bg-muted/80 transition-all hover-scale"
                  >
                    {sem} Semester
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-secondary" />
                Class Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockOrganizedData.classes.map((cls, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-muted text-center font-semibold hover:bg-muted/80 transition-all hover-scale"
                  >
                    {cls}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrganizedStructure;
