
// import './index.css';
// import Numerologie from './pages/Numerologie.jsx'; 



// import React from 'react'

// function App() {
//   return (
//     <div> <Numerologie/> </div>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Numerologie from "./pages/Numerologie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Numerologie />} />
        <Route path="/accueil" element={<Accueil />} />
      </Routes>
    </Router>
  );
}

export default App;

