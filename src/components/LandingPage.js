import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import surveyImage from '../images/surveyo.jpeg';
import surveyImage1 from '../images/survey2.png';
import surveyImage2 from '../images/survey3.png';
import surveyImage3 from '../images/survey4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';



const LandingPage = () => {

  useEffect(() => {
    AOS.init();
  }, []);
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
        <div className="header-text animated fade-in">
          <h1>Your Dream Job is Just a Click Away</h1>
          <p>Find your next job with Jobrite and start your career journey today!</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </header>


      {/* Features Section */}
      <section className="features-section" data-aos="bounce" data-aos-delay="500">
        <h2 className="features-title" data-aos="fade-down" data-aos-delay="800">Why Choose Jobrite??</h2>
        <div className="features-grid" data-aos="fade-up" data-aos-duration="1200">
          <div className="feature" data-aos="fade-up" data-aos-duration="1200">
            <img src={surveyImage1} alt="Easy Job Application" />
            <h3>Effortless Job Application</h3>
            <p>Our intuitive platform allows you to search for and apply to jobs with ease. Get started with just a few clicks.</p>
          </div>

          <div className="feature" data-aos="fade-up" data-aos-duration="1200">
            <img src={surveyImage1} alt="Customizable Surveys" />
            <h3>Customizable Surveys for Employers</h3>
            <p>For employers, Jobrite offers customizable survey templates to help you find the best candidates for your organization.</p>
          </div>

          <div className="feature" data-aos="fade-up" data-aos-duration="1200">
            <img src={surveyImage2} alt="Real-Time Analytics" />
            <h3>Real-Time Job Analytics</h3>
            <p>Track job applications and candidate progress in real time. Make data-driven decisions with ease.</p>
          </div>

          <div className="feature" data-aos="fade-up" data-aos-duration="1200">
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

      <div class="section" data-aos="fade-up" data-aos-duration="1500">
        <h1>Welcome to Jobrite!</h1>
      </div>

      <div class="section" data-aos="zoom-in" data-aos-delay="1400">
        <p>Find the job of your dreams.</p>
      </div>

      <div class="cta" id="cta-section" data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-out-cubic">
        <a href="/signup" class="cta-button">Get Started</a>
      </div>


      <footer className="landing-footer">
        <div className="footer-container">
          {/* Contact Section */}
          <div className="footer-category contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:support@jobrite.com">support@jobrite.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+1234567890">+233 53 599 7153</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Oblogo Rd, 82</span>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="footer-category follow-us">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="footer-category subscribe">
            <h3>Subscribe</h3>
            <p>Enter your email and we’ll send you the latest information and plans.</p>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Your email ID"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>

        </div>
        <p className="footer-copyright">© 2024 Jobrite. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default LandingPage;
