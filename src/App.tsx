import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carol-portfolio" element={<Home />} />
          <Route path="/projects/:projectName" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
