import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./Styles/index.css";
import { useEffect } from "react";
import { ForYou } from "./Pages/ForYou";
import { BookContent } from "./Pages/BookContent";
import { Book } from "./Pages/Book";
import { ChoosePlan } from "./Pages/ChoosePlan";
import { Library } from "./Pages/Library";
import { Settings } from "./Pages/Settings";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-you" element={<ForYou />} />
          <Route path="/book/:id" element={<BookContent />} />
          <Route path="/player/:id" element={<Book/>}/>
          <Route path="/choose-plan" element={<ChoosePlan/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
