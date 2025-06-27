import React from 'react';
import Generateur from '../component/Generateur.jsx';
import Navbar from "../component/Navbar";
import '../index.css';

function Numerologie() {
  return (
    <>
      <Navbar />
      <div>
        <Generateur />
      </div>
    </>
  );
}

export default Numerologie;
