import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NaveBar from "./layout/naveBar";
// import Footer from "./layout/footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Resume from "./components/Resume";

const App = () => {
  const routBase = "Portfolio";

  return (
    <Router>
      <NaveBar />
      <Routes>
        <Route path={`${routBase}/`} element={<Home />}></Route>
        <Route path={`${routBase}/about`} element={<About />}></Route>
        <Route path={`${routBase}/projects`} element={<Projects />}></Route>
        <Route path={`${routBase}/resume`} element={<Resume />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
