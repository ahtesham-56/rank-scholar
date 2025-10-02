import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const mockLeaderboardData = [
  { rank: 1, name: "Sarah Johnson", department: "Computer Science", cgpa: 9.85, change: "up" },
  { rank: 2, name: "Michael Chen", department: "Electrical Engineering", cgpa: 9.72, change: "same" },
  { rank: 3, name: "Emily Davis", department: "Mechanical Engineering", cgpa: 9.68, change: "up" },
  { rank: 4, name: "James Wilson", department: "Civil Engineering", cgpa: 9.55, change: "down" },
  { rank: 5, name: "Anna Martinez", department: "Computer Science", cgpa: 9.48, change: "up" },
];

const InteractiveLeaderboard = () => {
  const navigate = useNavigate();
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

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
          <h1 className="text-4xl font-bold mb-2">Interactive Leaderboard</h1>
          <p className="text-white/90">Real-time student performance tracking</p>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <div className="mb-6 flex justify-between items-center">
          <Badge variant="outline" className="text-sm">
            Last Updated: {lastUpdate.toLocaleTimeString()}
          </Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Live Updates Active
          </div>
        </div>

        <Card className="shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Trophy className="h-6 w-6 text-warning" />
              Top 20 Performers (9.0+ CGPA)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockLeaderboardData.map((student, index) => (
                <div
                  key={student.rank}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {student.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-base">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.department}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="default" className="font-bold text-lg px-4 py-2">
                      {student.cgpa}
                    </Badge>
                    {student.change === "up" && (
                      <TrendingUp className="h-5 w-5 text-success" />
                    )}
                    {student.change === "down" && (
                      <TrendingUp className="h-5 w-5 text-destructive rotate-180" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveLeaderboard;
