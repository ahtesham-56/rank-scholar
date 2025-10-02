import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Shield, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SecureAccess = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const handleVerify = () => {
    // TODO: Implement verification logic
    console.log("Verifying:", studentId, rollNumber);
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
          <h1 className="text-4xl font-bold mb-2">Secure Access Portal</h1>
          <p className="text-white/90">Protected student result verification</p>
        </div>
      </header>

      <div className="container mx-auto py-12 px-4 flex justify-center">
        <Card className="shadow-card animate-scale-in max-w-md w-full">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Verify Your Identity</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access secure student results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  type="text"
                  placeholder="Enter your student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rollNumber">Roll Number</Label>
                <Input
                  id="rollNumber"
                  type="text"
                  placeholder="Enter your roll number"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                />
              </div>
              <Button onClick={handleVerify} className="w-full" size="lg">
                <Lock className="h-4 w-4 mr-2" />
                Verify & Access Results
              </Button>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-muted">
              <p className="text-sm text-muted-foreground text-center">
                <Shield className="h-4 w-4 inline mr-1" />
                Your data is encrypted and securely stored
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SecureAccess;
