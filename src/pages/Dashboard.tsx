import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, TrendingUp, Award, BookOpen } from "lucide-react";
import Leaderboard from "@/components/Leaderboard";
import ResultsTable from "@/components/ResultsTable";
import DepartmentFilter from "@/components/DepartmentFilter";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-white/90">View your results and track your performance</p>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
              <TrendingUp className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">8.75</div>
              <p className="text-xs text-muted-foreground">+0.15 from last semester</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Rank</CardTitle>
              <Trophy className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground">Out of 450 students</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses Passed</CardTitle>
              <BookOpen className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">32</div>
              <p className="text-xs text-muted-foreground">Total courses</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Award className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">5</div>
              <p className="text-xs text-muted-foreground">Awards & honors</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Results Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>My Results</CardTitle>
                <CardDescription>View your semester results and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="current" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="current">Current</TabsTrigger>
                    <TabsTrigger value="previous">Previous</TabsTrigger>
                    <TabsTrigger value="all">All Semesters</TabsTrigger>
                  </TabsList>
                  <TabsContent value="current" className="mt-4">
                    <DepartmentFilter />
                    <ResultsTable />
                  </TabsContent>
                  <TabsContent value="previous" className="mt-4">
                    <DepartmentFilter />
                    <ResultsTable />
                  </TabsContent>
                  <TabsContent value="all" className="mt-4">
                    <DepartmentFilter />
                    <ResultsTable />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard Section */}
          <div className="lg:col-span-1">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
