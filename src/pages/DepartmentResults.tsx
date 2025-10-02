import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ResultsTable from "@/components/ResultsTable";
import DepartmentFilter from "@/components/DepartmentFilter";

const DepartmentResults = () => {
  const navigate = useNavigate();
  const { department } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-white py-8 px-4 animate-fade-in">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/department-view")}
            className="mb-4 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Departments
          </Button>
          <h1 className="text-4xl font-bold mb-2 capitalize">{department} - Results</h1>
          <p className="text-white/90">Student results sorted by CGPA</p>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <Card className="shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Department Results</span>
              <Badge variant="secondary" className="text-sm">
                Latest Results
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DepartmentFilter />
            <ResultsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DepartmentResults;
