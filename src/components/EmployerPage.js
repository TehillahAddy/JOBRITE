import { useNavigate } from 'react-router-dom';
import './EmployerPage.css';
import React, { useState, useEffect } from 'react';

import {
  FaGoogle,
  FaGithub,
  FaGitlab,
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaApple,
  FaLinkedinIn,
  FaLinkedin,
} from 'react-icons/fa';
import './JobSeekerPage.css';
import { NavLink } from 'react-router-dom';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; // Correct module imports

import surveyImage from '../images/surveyo.jpeg';

const EmployerPage = () => {

  useEffect(() => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon) {
      menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }

    // Clean up the event listener when component is unmounted
    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      }
    };
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUpOption = (role) => {
    setModalOpen(false);
    if (role === 'job-seeker') {
      navigate('/signup-job-seeker');
    } else if (role === 'employer') {
      navigate('/signup-employer');
    }
  };

  const toggleModal = () => {
    setModalOpen(prev => !prev); // Toggle modal visibility on click for mobile
  };


  const [password, setPassword] = useState("");
  const [passwordCriteria, setPasswordCriteria] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);


  const validatePassword = (value) => {
    setPassword(value);
    setPasswordCriteria({
      hasUppercase: /[A-Z]/.test(value),
      hasLowercase: /[a-z]/.test(value),
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };


  // State for the selected values of Day, Month, and Year
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Toggles dropdown visibility
  const toggleDropdown = (type) => {
    const dropdown = document.querySelector(`.custom-options.${type}`);
    dropdown.classList.toggle('active');
  };

  // Hides dropdowns if clicked outside
  document.addEventListener('click', (e) => {
    const dropdowns = document.querySelectorAll('.custom-options');
    dropdowns.forEach((dropdown) => {
      if (!dropdown.parentElement.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  });

  // Filters dropdown options
  const handleFilter = (e, type) => {
    const query = e.target.value.toLowerCase();
    const options = document.querySelectorAll(`.custom-options.${type} .custom-option`);
    options.forEach((option) => {
      option.style.display = option.textContent.toLowerCase().includes(query)
        ? 'block'
        : 'none';
    });
  };

  // Updates input field value when an option is selected
  const handleSelect = (value, type) => {
    if (type === 'days') {
      setSelectedDay(value);
    } else if (type === 'months') {
      setSelectedMonth(value);
    } else if (type === 'years') {
      setSelectedYear(value);
    }
  };


  return (
    <div className="em-page">
      <nav className="navbar">
        <div className="logo">
          <img src={surveyImage} alt="Jobrite Logo" />
        </div>
        <ul className="nav-links">
          {/* Home Link */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Home
            </NavLink>
          </li>
          {/* About Link */}
          <li>
            <NavLink
              to="/dice"
              className={({ isActive }) => isActive ? "active-link" : ""} > Dice
            </NavLink>
          </li>
          {/* Dropdown Section */}
          <ul className="nav-links">
            {/* Employer Dropdown */}
            <li className="dropdown">
              <a href="/about" className="dropdown-trigger">
                Employment Tracker <span className="dropdown-indicator">⮟</span>
              </a>
              <div className="dropdown-content">
                <div className="dropdown-item"><a href="/employer/solutions">Solutions</a></div>
                <div className="dropdown-item"><a href="/employer/hire">Hire Talent</a></div>
                <div className="dropdown-item"><a href="/employer/manage">Manage Listings</a></div>
              </div>
            </li>

            {/* Job Seeker Dropdown */}
            <li className="dropdown">
              <a href="/about" className="dropdown-trigger">
                Global Career <span className="dropdown-indicator">⮟</span>
              </a>
              <div className="dropdown-content">
                <div className="dropdown-item"><a href="/seeker/jobs">Browse Jobs</a></div>
                <div className="dropdown-item"><a href="/seeker/apply">Apply for Jobs</a></div>
              </div>
            </li>
          </ul>
          {/* Contact Link */}
          <li>
            <NavLink
              to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} > Contacts
            </NavLink>
          </li>
        </ul>

        {/* Sign In & Sign Up Links */}
        <div className="auth-links">
          <div className="auth-links">
            <NavLink to="/signin" className="auth-link">Sign In</NavLink>
            <span className="separator">|</span>
            <div
              className={`auth-link signup ${isModalOpen ? 'active' : ''}`} // Add 'active' class if modal is open
              onClick={toggleModal} // Toggle modal on click for mobile
            >
              Sign Up
              <div className="hover-modal">
                <h3>Sign Up</h3>
                <p>Select your account type to proceed:</p>
                <div className="signup-options">
                  <NavLink
                    to="/signup-job-seeker"
                    className="option-button job-seeker-button"
                    onClick={() => handleSignUpOption('job-seeker')}
                  >
                    I'm a Job Seeker
                  </NavLink>
                  <NavLink
                    to="/signup-employer"
                    className="option-button employer-button"
                    onClick={() => handleSignUpOption('employer')}
                  >
                    I'm an Employer
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <button className="post-job-button">Post a Job</button>
        </div>
      </nav>

      <div className="under-nav">
        <h2>Welcome Employers, Create an account!!</h2>
        <p>Reach top talent and find the right candidate today.</p>
        <hr className="footer-divide" />
      </div>
     
      {/* Left Section */}
      <div className="info-section">
        <h1>Company Representative</h1>
        <p>This is information pertaining to you as a representative of the company.</p>
      </div>

      {/* Right Form Section */}
      <div className="form-containers">
        <div className="form-sectio">
          <h2>Continue with:</h2>
          <form className="signup-form">
            {/* Name Fields */}
            <div className="form-row">
              <div className="form-rowss">
                <div className="input-group">
                  <input type="text" placeholder="First Name" />
                  <FaUser className="input-icon" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Last Name" />
                  <FaUser className="input-icon" />
                </div>
              </div>
            </div>

            {/* Username */}
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Username" />
            </div>

            {/* Email */}
            <div className="input-group">
              <input type="email" placeholder="Work Email" />
              <FaEnvelope className="input-icon" />
            </div>

            {/* Password */}
            <div className="input-group">
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => validatePassword(e.target.value)}
              />
              <span
                className="info-icon"
                onMouseEnter={() => setShowPasswordTooltip(true)}  // Show tooltip on hover
                onMouseLeave={() => setShowPasswordTooltip(false)} // Hide tooltip when hover leaves
              >
                ⓘ
              </span>
              {showPasswordTooltip && (
                <div className="password-tooltip">
                  <p>Password must contain:</p>
                  <ul>
                    <li className={passwordCriteria.hasUppercase ? "valid" : "invalid"}>
                      At least one uppercase letter
                    </li>
                    <li className={passwordCriteria.hasLowercase ? "valid" : "invalid"}>
                      At least one lowercase letter
                    </li>
                    <li className={passwordCriteria.hasNumber ? "valid" : "invalid"}>
                      At least one number
                    </li>
                    <li className={passwordCriteria.hasSpecialChar ? "valid" : "invalid"}>
                      At least one special character
                    </li>
                  </ul>
                </div>
              )}
              <div className="password-validation">
                <div className={`validation-line ${passwordCriteria.hasUppercase ? "valid" : ""}`}></div>
                <div className={`validation-line ${passwordCriteria.hasLowercase ? "valid" : ""}`}></div>
                <div className={`validation-line ${passwordCriteria.hasNumber ? "valid" : ""}`}></div>
                <div className={`validation-line ${passwordCriteria.hasSpecialChar ? "valid" : ""}`}></div>
              </div>
              <FaLock className="input-icon" />
            </div>

            <div className="form-rows">
              {/* Day */}
              <div className="custom-dropdown" onClick={() => toggleDropdown('days')}>
                <input
                  type="text"
                  placeholder="Day"
                  className="custom-search"
                  value={selectedDay}
                  onChange={(e) => handleFilter(e, 'days')}
                />
                <div className="custom-options days">
                  {[...Array(31).keys()].map((day) => (
                    <div key={day + 1} className="custom-option" onClick={() => handleSelect(day + 1, 'days')}>
                      {day + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Month */}
              <div className="custom-dropdown" onClick={() => toggleDropdown('months')}>
                <input
                  type="text"
                  placeholder="Month"
                  className="custom-search"
                  value={selectedMonth}
                  onChange={(e) => handleFilter(e, 'months')}
                />
                <div className="custom-options months">
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                    <div key={index} className="custom-option" onClick={() => handleSelect(month, 'months')}>
                      {month}
                    </div>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div className="custom-dropdown" onClick={() => toggleDropdown('years')}>
                <input
                  type="text"
                  placeholder="Year"
                  className="custom-search"
                  value={selectedYear}
                  onChange={(e) => handleFilter(e, 'years')}
                />
                <div className="custom-options years">
                  {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                    <div key={year} className="custom-option" onClick={() => handleSelect(year, 'years')}>
                      {year}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Nationality */}

            <div className="dropdown-container">
              <select className="dropdowns">
                <option>Nationality</option>
                <option>Ghanaian</option>
                <option>Nigerian</option>
                <option>British</option>
                <option>Canadian</option>
                <option>Other</option>
              </select>
              <select className="dropdowns">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select className="dropdowns">
                <option>Position In Company</option>
                <option> C-level: CEO / COO / CIO / CFO / CTO / CPO</option>
                <option>Senior Management: Head of Department / Team Lead</option>
                <option>Middle Management: Supervisor / Unit Head</option>
                <option>Junior Level: Associate / Officer</option>
                <option>Other</option>
              </select>
            </div>

            {/* Contact */}<div className="form-row">
              <div className="form-rowss">
                <div className="input-group">
                  <FaPhoneAlt className="input-icon" />
                  <input type="text" placeholder="Mobile Number" />
                </div>
                <div className="input-group">
                  <FaPhoneAlt className="input-icon" />
                  <input type="text" placeholder="Contact Number" />
                </div>
              </div>
            </div>
            <div>
              <button className="But">Sign Up</button>
            </div>
          </form>
          <p className="terms">
            By creating an account, you agree to the <a href="#">Terms of Service</a>.
          </p>
        </div>
      </div>

      

      <div className="employer-page-container">
        <div className="text-section">
          <h2>Welcome Employers</h2>
          <p>Fill out the form to register your company and start posting job listings to find the best candidates for your team.</p>
        </div>

        <div className="form-section">
          <form className="employer-form">
            <h3>Company Information</h3>
            <p className="form-description">This information pertains to your company</p>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Enter your company name" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Industry *</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <select required>
                  <option value="">Number of Employees *</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Type of Employer *</option>
                  <option value="Private">Private</option>
                  <option value="Public">Public</option>
                  <option value="Government">Government</option>
                  <option value="NGO">NGO</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="url" placeholder="Website https://example.com" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Enter contact person name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <select required>
                  <option value="+233">Ghana (+233)</option>
                  <option value="+1">USA (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+91">India (+91)</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Enter phone number" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <textarea placeholder="Enter your company address" required></textarea>
              </div>
            </div>

            <div className="form-footer">
              <label className="terms">
                <input type="checkbox" required />
                I agree to the <a href="#">TERMS & CONDITIONS</a> and <a href="#">PRIVACY POLICY</a>
              </label>
              <button type="submit">Create Your Account</button>

              <p className="terms">
                By creating an account, you agree to the <a href="#">Terms of Service</a>.
              </p>

              <p>
                Already have an account? <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="landing-footer">
        <div className="footer-container">
          {/* Contact Section */}
          <div className="footer-category contact">
            <h3>Contact (Employer) </h3>
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
                <a href="Oblogo Rd, 82">Oblogo Rd, 82</a>
              </li>
            </ul>
          </div>

          <div className="footer-category contact">
            <h3>Contact (Job Seeker)</h3>
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
                <a href="Oblogo Rd, 82">Oblogo Rd, 82</a>
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

        <div className="down">
          <hr className="footer-divider" />
          <div className="footer-category follow-uss">
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
            <p className="footer-copyright">© 2024 Jobrite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmployerPage;
