import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { useState } from 'react';

function App() {
  const style = {
    display: 'flex',
    background: '#181818'
  };
  const [page, setPage] = useState(0);
  return (
    <div className="App" style={style}>
      <Navbar page = {page} changePage = {setPage}/>
      <Topbar page = {page}/>  
    </div> 
    
  );
}

export default App;
