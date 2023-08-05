import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./Styles/index.css";
import { ForYou } from "./Pages/ForYou";
import { Modal } from "./Components/UI/Modal";
import { useState } from "react";
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)


  function handleLoginSuccess(){
    setIsLoggedIn(true)

  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-you" element={<ForYou />} />
        </Routes>
        <Modal isLoggedIn={isLoggedIn} onLoginSuccess={handleLoginSuccess} />
      </Router>
    </>
  );
}

export default App;
