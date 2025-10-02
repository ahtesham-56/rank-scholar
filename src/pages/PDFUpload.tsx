import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, FileText, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PDFUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to upload",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    // TODO: Implement actual upload logic
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Upload Successful",
        description: "Results have been processed and sorted by CGPA",
      });
      setFile(null);
    }, 2000);
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
          <h1 className="text-4xl font-bold mb-2">PDF Result Upload</h1>
          <p className="text-white/90">Upload student results for automatic CGPA sorting</p>
        </div>
      </header>

      <div className="container mx-auto py-12 px-4 flex justify-center">
        <Card className="shadow-card animate-scale-in max-w-2xl w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Upload Result PDF</CardTitle>
            <CardDescription>
              Upload student result PDFs. Results will be automatically sorted by CGPA and organized into groups.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  {file ? (
                    <div className="space-y-2">
                      <CheckCircle className="h-12 w-12 mx-auto text-success" />
                      <p className="font-semibold text-lg">{file.name}</p>
                      <p className="text-sm text-muted-foreground">Click to change file</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                      <p className="font-semibold text-lg">Click to upload PDF</p>
                      <p className="text-sm text-muted-foreground">or drag and drop</p>
                    </div>
                  )}
                </label>
              </div>

              <Button onClick={handleUpload} disabled={!file || uploading} className="w-full" size="lg">
                <FileText className="h-4 w-4 mr-2" />
                {uploading ? "Processing..." : "Upload & Process Results"}
              </Button>

              <div className="p-4 rounded-lg bg-muted space-y-2">
                <p className="font-semibold text-sm">Automatic Processing:</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Students grouped by CGPA ranges (6.x, 7.x, 8.x, 9.x)</li>
                  <li>• Top 20 students with 9.0+ CGPA featured on leaderboard</li>
                  <li>• Results sorted in descending order by CGPA</li>
                  <li>• Real-time updates across all portals</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PDFUpload;
