import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const mockLeaderboardData = [
  { rank: 1, name: "Sarah Johnson", department: "Computer Science", cgpa: 9.85, icon: Trophy, color: "text-warning" },
  { rank: 2, name: "Michael Chen", department: "Electrical Engineering", cgpa: 9.72, icon: Medal, color: "text-muted-foreground" },
  { rank: 3, name: "Emily Davis", department: "Mechanical Engineering", cgpa: 9.68, icon: Award, color: "text-orange-600" },
  { rank: 4, name: "James Wilson", department: "Civil Engineering", cgpa: 9.55 },
  { rank: 5, name: "Anna Martinez", department: "Computer Science", cgpa: 9.48 },
  { rank: 6, name: "David Brown", department: "Electronics", cgpa: 9.42 },
  { rank: 7, name: "Lisa Anderson", department: "Information Technology", cgpa: 9.38 },
  { rank: 8, name: "Robert Taylor", department: "Biotechnology", cgpa: 9.35 },
];

const Leaderboard = () => {
  return (
    <Card className="shadow-card h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-warning" />
          Top Performers
        </CardTitle>
        <CardDescription>Current semester leaderboard</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockLeaderboardData.map((student) => {
            const Icon = student.icon;
            return (
              <div
                key={student.rank}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  student.rank <= 3 ? "bg-muted" : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8">
                  {Icon ? (
                    <Icon className={`h-6 w-6 ${student.color}`} />
                  ) : (
                    <span className="font-semibold text-muted-foreground">{student.rank}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{student.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{student.department}</p>
                </div>
                <Badge variant="secondary" className="font-bold">
                  {student.cgpa}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
