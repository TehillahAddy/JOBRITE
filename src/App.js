
import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './components/LandingPage';
import DicePage from './components/DicePage';
import JobSeekerPage from './components/JobSeekerPage';
import EmployerPage from './components/EmployerPage';
import LoginPagePage from './components/LoginPage';
import LoginPage from './components/LoginPage';
import SkillsBarPage from './components/SkillsBar';



function App() {
  return (
    <div className="App">
     <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dice" element={<DicePage />} />
          <Route path="/signup-job-seeker" element={<JobSeekerPage />} />
          <Route path="/signup-employer" element={<EmployerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/skills" element={<SkillsBarPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
    </div>
  );
}

export default App;
