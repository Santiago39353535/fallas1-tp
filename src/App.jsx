import './App.css';
import React, { useEffect } from 'react';

//imports
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Dashboard from './views/dashboard/Dashboard';

function App() {
  useEffect(() => {
    document.title = "Sistema Experto - Motos"
  }, [])
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
