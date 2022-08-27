import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NaveBar from "./layout/naveBar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";

const App = () => {
  const routBase = "Portfolio";

  return (
    <Router>
      <NaveBar />
      <Routes>
        <Route path={`${routBase}/`} element={<Home />}></Route>
        <Route path={`${routBase}/about`} element={<About />}></Route>
        <Route path={`${routBase}/projects`} element={<Projects />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
