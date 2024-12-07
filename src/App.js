
import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './components/LandingPage';
import DicePage from './components/DicePage';

function App() {
  return (
    <div className="App">
     <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dice" element={<DicePage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
    </div>
  );
}

export default App;
