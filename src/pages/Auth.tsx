import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, User, UserCog } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent, userType: "student" | "staff") => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement authentication logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elevated">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Sign in to access your academic portal</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="student" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Student
              </TabsTrigger>
              <TabsTrigger value="staff" className="flex items-center gap-2">
                <UserCog className="h-4 w-4" />
                Staff
              </TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <form onSubmit={(e) => handleSubmit(e, "student")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input id="student-id" placeholder="Enter your student ID" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <Input id="student-password" type="password" placeholder="Enter your password" required />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="staff">
              <form onSubmit={(e) => handleSubmit(e, "staff")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="staff-email">Email</Label>
                  <Input id="staff-email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="staff-password">Password</Label>
                  <Input id="staff-password" type="password" placeholder="Enter your password" required />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
