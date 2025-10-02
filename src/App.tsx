import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CGPARanking from "./pages/CGPARanking";
import InteractiveLeaderboard from "./pages/InteractiveLeaderboard";
import OrganizedStructure from "./pages/OrganizedStructure";
import SecureAccess from "./pages/SecureAccess";
import DepartmentView from "./pages/DepartmentView";
import DepartmentResults from "./pages/DepartmentResults";
import PDFUpload from "./pages/PDFUpload";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cgpa-ranking" element={<CGPARanking />} />
          <Route path="/interactive-leaderboard" element={<InteractiveLeaderboard />} />
          <Route path="/organized-structure" element={<OrganizedStructure />} />
          <Route path="/secure-access" element={<SecureAccess />} />
          <Route path="/department-view" element={<DepartmentView />} />
          <Route path="/department-results/:department" element={<DepartmentResults />} />
          <Route path="/pdf-upload" element={<PDFUpload />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
