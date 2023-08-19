import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./Styles/index.css";

import { ForYou } from "./Pages/ForYou";
import { BookContent } from "./Pages/BookContent";
import { Book } from "./Pages/Book";
import { ChoosePlan } from "./Pages/ChoosePlan";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
