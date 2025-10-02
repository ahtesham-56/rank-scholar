import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockResults = [
  { course: "Data Structures", code: "CS301", credits: 4, grade: "A+", points: 10, status: "Passed" },
  { course: "Database Systems", code: "CS302", credits: 4, grade: "A", points: 9, status: "Passed" },
  { course: "Operating Systems", code: "CS303", credits: 4, grade: "A", points: 9, status: "Passed" },
  { course: "Computer Networks", code: "CS304", credits: 3, grade: "A+", points: 10, status: "Passed" },
  { course: "Software Engineering", code: "CS305", credits: 3, grade: "A", points: 9, status: "Passed" },
];

const ResultsTable = () => {
  const totalCredits = mockResults.reduce((sum, result) => sum + result.credits, 0);
  const totalPoints = mockResults.reduce((sum, result) => sum + (result.credits * result.points), 0);
  const sgpa = (totalPoints / totalCredits).toFixed(2);

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Code</TableHead>
              <TableHead>Course Name</TableHead>
              <TableHead className="text-center">Credits</TableHead>
              <TableHead className="text-center">Grade</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockResults.map((result) => (
              <TableRow key={result.code}>
                <TableCell className="font-medium">{result.code}</TableCell>
                <TableCell>{result.course}</TableCell>
                <TableCell className="text-center">{result.credits}</TableCell>
                <TableCell className="text-center">
                  <Badge variant={result.grade.startsWith("A") ? "default" : "secondary"}>
                    {result.grade}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline" className="text-success border-success">
                    {result.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
        <div>
          <p className="text-sm text-muted-foreground">Total Credits</p>
          <p className="text-2xl font-bold text-primary">{totalCredits}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Semester GPA</p>
          <p className="text-2xl font-bold text-secondary">{sgpa}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
