import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./Styles/index.css";
import { ForYou } from "./Pages/ForYou";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-you" element={<ForYou />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
