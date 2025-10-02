import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const mockRankingData = [
  { rank: 1, name: "Sarah Johnson", department: "Computer Science", cgpa: 9.85, semester: "6th", icon: Trophy, color: "text-warning" },
  { rank: 2, name: "Michael Chen", department: "Electrical Engineering", cgpa: 9.72, semester: "6th", icon: Medal, color: "text-muted-foreground" },
  { rank: 3, name: "Emily Davis", department: "Mechanical Engineering", cgpa: 9.68, semester: "6th", icon: Award, color: "text-orange-600" },
  { rank: 4, name: "James Wilson", department: "Civil Engineering", cgpa: 9.55, semester: "6th" },
  { rank: 5, name: "Anna Martinez", department: "Computer Science", cgpa: 9.48, semester: "6th" },
  { rank: 6, name: "David Brown", department: "Electronics", cgpa: 9.42, semester: "6th" },
  { rank: 7, name: "Lisa Anderson", department: "Information Technology", cgpa: 9.38, semester: "6th" },
  { rank: 8, name: "Robert Taylor", department: "Biotechnology", cgpa: 9.35, semester: "6th" },
  { rank: 9, name: "Jessica Lee", department: "Computer Science", cgpa: 9.28, semester: "6th" },
  { rank: 10, name: "Christopher Moore", department: "Mechanical Engineering", cgpa: 9.22, semester: "6th" },
];

const CGPARanking = () => {
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
          <h1 className="text-4xl font-bold mb-2">CGPA Based Ranking</h1>
          <p className="text-white/90">Top performers ranked by cumulative GPA</p>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <Card className="shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Trophy className="h-6 w-6 text-warning" />
              Complete Rankings - Current Semester
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockRankingData.map((student, index) => {
                const Icon = student.icon;
                return (
                  <div
                    key={student.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all hover-scale ${
                      student.rank <= 3 ? "bg-muted border-2 border-primary/20" : "bg-muted/50 hover:bg-muted"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background">
                      {Icon ? (
                        <Icon className={`h-7 w-7 ${student.color}`} />
                      ) : (
                        <span className="font-bold text-lg text-primary">{student.rank}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-base">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.department} • {student.semester} Semester</p>
                    </div>
                    <Badge variant="default" className="font-bold text-lg px-4 py-2">
                      {student.cgpa}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CGPARanking;
