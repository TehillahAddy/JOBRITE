import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import surveyImage from '../images/surveyo.jpeg';
import surveyImage1 from '../images/survey2.png';
import surveyImage2 from '../images/survey3.png';
import surveyImage3 from '../images/survey4.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={surveyImage} alt="Jobrite Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
          {/* Employer Dropdown */}
          <li className="dropdown">
            <Link to="/employer" className="dropdown-link">Employer</Link>
            <ul className="dropdown-menu">
              <li><Link to="/employer/solutions">Solutions</Link></li>
              <li><Link to="/employer/hire">Hire Talent</Link></li>
              <li><Link to="/employer/manage">Manage Listings</Link></li>
            </ul>
          </li>

          {/* Job Seeker Dropdown */}
          <li className="dropdown">
            <Link to="/jobseeker" className="dropdown-link">Job Seeker</Link>
            <ul className="dropdown-menu">
              <li><Link to="/jobseeker/search">Search Jobs</Link></li>
              <li><Link to="/jobseeker/saved">Saved Jobs</Link></li>
              <li><Link to="/jobseeker/alerts">Job Alerts</Link></li>
            </ul>
          </li>

          <li><Link to="/contact">Contacts</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="landing-header">
        <div className="header-text">
          <h1>Your Dream Job is Just a Click Away</h1>
          <p>Find your next job with Jobrite and start your career journey today!</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Why Choose Jobrite??</h2>
        <div className="features-grid">
          <div className="feature">
            <img src={surveyImage1} alt="Easy Job Application" />
            <h3>Effortless Job Application</h3>
            <p>Our intuitive platform allows you to search for and apply to jobs with ease. Get started with just a few clicks.</p>
          </div>

          <div className="feature">
            <img src={surveyImage1} alt="Customizable Surveys" />
            <h3>Customizable Surveys for Employers</h3>
            <p>For employers, Jobrite offers customizable survey templates to help you find the best candidates for your organization.</p>
          </div>

          <div className="feature">
            <img src={surveyImage2} alt="Real-Time Analytics" />
            <h3>Real-Time Job Analytics</h3>
            <p>Track job applications and candidate progress in real time. Make data-driven decisions with ease.</p>
          </div>

          <div className="feature">
            <img src={surveyImage3} alt="Multi-Channel Distribution" />
            <h3>Multi-Channel Distribution</h3>
            <p>Reach a wide audience with our multi-channel job distribution network. Get your job listings in front of the right people.</p>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"Jobrite helped me land my dream job in no time! The platform is easy to use, and the job search is so simple!"</p>
          <span>- Sarah, Job Seeker</span>
        </div>
        <div className="testimonial">
          <p>"As an employer, Jobrite's customizable surveys have made hiring the right talent a breeze. Highly recommend!"</p>
          <span>- John, Employer</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>Already have an account? <Link to="/login" className="sign-in-link">Sign In</Link></p>
         {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-links">
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="social-icons">
          {/* Add social media links here */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>© 2024 Jobrite. All rights reserved.</p>
      </footer>
      </footer>
    </div>
  );
};

export default LandingPage;
