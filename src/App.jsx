import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import Courses from "./components/Courses";
import Translate from "./components/Translate";

const App = () => {
  return (
    <div className="m-0">
      <Navbar />
      <div className="h-[90vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/explore" element={<Explore />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/course/:id" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
