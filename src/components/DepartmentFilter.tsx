import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const departments = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electronics",
  "Information Technology",
  "Biotechnology",
];

const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"];

const DepartmentFilter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="space-y-2">
        <Label htmlFor="department">Department</Label>
        <Select defaultValue="cs">
          <SelectTrigger id="department">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept, index) => (
              <SelectItem key={index} value={dept.toLowerCase().replace(/ /g, "-")}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="semester">Semester</Label>
        <Select defaultValue="6">
          <SelectTrigger id="semester">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            {semesters.map((sem, index) => (
              <SelectItem key={index} value={String(index + 1)}>
                {sem}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="class">Class</Label>
        <Select defaultValue="a">
          <SelectTrigger id="class">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Class A</SelectItem>
            <SelectItem value="b">Class B</SelectItem>
            <SelectItem value="c">Class C</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DepartmentFilter;
