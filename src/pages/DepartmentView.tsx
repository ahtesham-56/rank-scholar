import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const departments = [
  { name: "B.Tech", fullName: "Bachelor of Technology", students: 1200, color: "bg-blue-500" },
  { name: "BCA", fullName: "Bachelor of Computer Applications", students: 450, color: "bg-green-500" },
  { name: "B.Pharma", fullName: "Bachelor of Pharmacy", students: 380, color: "bg-purple-500" },
  { name: "D.Pharma", fullName: "Diploma in Pharmacy", students: 200, color: "bg-pink-500" },
  { name: "Law", fullName: "Bachelor of Laws", students: 320, color: "bg-amber-500" },
  { name: "BBA", fullName: "Bachelor of Business Administration", students: 500, color: "bg-indigo-500" },
  { name: "B.Sc", fullName: "Bachelor of Science", students: 650, color: "bg-teal-500" },
  { name: "B.Com", fullName: "Bachelor of Commerce", students: 550, color: "bg-orange-500" },
];

const DepartmentView = () => {
  const navigate = useNavigate();

  const handleDepartmentClick = (deptName: string) => {
    navigate(`/department-results/${deptName.toLowerCase().replace(/\./g, "")}`);
  };

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
          <h1 className="text-4xl font-bold mb-2">Department-Wise View</h1>
          <p className="text-white/90">Browse results by department</p>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <Card className="shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GraduationCap className="h-6 w-6 text-primary" />
              All Departments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  onClick={() => handleDepartmentClick(dept.name)}
                  className="p-6 rounded-lg bg-muted hover:bg-muted/80 transition-all hover-scale cursor-pointer border-2 border-transparent hover:border-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 ${dept.color} rounded-full mb-3 flex items-center justify-center`}>
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-1">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{dept.fullName}</p>
                  <p className="text-sm font-semibold">{dept.students} Students</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DepartmentView;
