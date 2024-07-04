import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
