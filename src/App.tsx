import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </MainLayout>
      <Analytics />
    </Router>
  );
};

export default App;
