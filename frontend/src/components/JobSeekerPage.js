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

const JobSeekerPage = () => {

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


  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileName(selectedFile ? selectedFile.name : 'No file chosen');
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    mobileNumber: "",
    contactNumber: "",
  });

  const [message, setMessage] = useState({ success: "", error: "" });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Log form data to verify all fields are populated
    console.log("Form data being sent:", formData);
  
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage({ success: data.message, error: "" });
      } else {
        const errorData = await response.json();
        setMessage({ error: errorData.message, success: "" });
        console.error("Error data:", errorData); // Log error response
      }
    } catch (err) {
      setMessage({ error: "An error occurred. Please try again.", success: "" });
      console.error("Fetch error:", err); // Log fetch error
    }
  };
  


  return (
    <div className="job-seeker-page">
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
          <NavLink to="/login" className="auth-link">Sign In</NavLink>
          <span className="separator">|</span>
          <div className="auth-link signup">
            Sign Up
            <div className="hover-modal">
              <h3>Sign Up</h3>
              <p>Select your account type to proceed:</p>
              <div className="signup-options">
                <NavLink
                  to="/signup-job-seeker"
                  className="option-button job-seeker-button"
                >
                  I'm a Job Seeker
                </NavLink>
                <NavLink
                  to="/signup-employer"
                  className="option-button employer-button"
                >
                  I'm an Employer
                </NavLink>
              </div>
            </div>
          </div>
          <button className="post-job-button">Post a Job</button>
        </div>
      </nav>

      <div className="under-nav">
        <h2>Welcome Job Seeker, Create an account!!</h2>
        <p>Connect with top employers and discover the perfect opportunity.</p>
        <hr className="footer-divide" />
      </div>

      {/* Left Section */}
      <div className="info-section">
        <h1>Personal Information</h1>
        <p>This is information pertaining to you as an individual.</p>
      </div>

      {/* Right Form Section */}
      <div className="form-container">
        <div className="form-sectio">
          <h2>Continue with:</h2>
          <div className="social-buttons">
            <button className="social-button">
              <FaGoogle className="social-icon" /> Google
            </button>
            <button className="social-button">
              <FaApple className="social-icon" /> Apple
            </button>
            <button className="social-button">
              <FaLinkedin className="social-icon" /> LinkedIn
            </button>
          </div>
          <p>Or</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="form-row">
              <div className="form-rowss">
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <FaUser className="input-icon" />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <FaUser className="input-icon" />
                </div>
              </div>
            </div>

            {/* Username */}
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <FaUser className="input-icon" />
            </div>

            {/* Email */}
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
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
                <option>Location</option>
                <option>Greater Accra</option>
                <option>Ashanti Region</option>
                <option>Central</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-rowss">
                <div className="input-group">
                  <FaPhoneAlt className="input-icon" />
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <FaPhoneAlt className="input-icon" />
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {message.error && <p className="error">{message.error}</p>}
            {message.success && <p className="success">{message.success}</p>}
            <button className="signup-button" type="submit">
              Sign Up
            </button>
          </form>
          <p className="terms">
            By creating an account, you agree to the <a href="#">Terms of Service</a>.
          </p>
        </div>
      </div>


      {/* WORK Form Section */}
      <section className="work">
        <div className="info-sections">
          <h1>Work Information</h1>
          <p>This is information pertaining to your past work experience and your qualifications</p>
        </div>

        {/* Right Form Section */}
        <div className="form-containers">
          <div className="form-sections">
            <h2> Provide Your Details</h2>

            <form class="signup-form">

              <div class="form-rows">
                <input list="highest-qualification-options" id="highest-qualification" class="dropdowns" placeholder="Highest Qualification *" />
                <datalist id="highest-qualification-options">
                  <option value="Bachelor's Degree"></option>
                  <option value="Master's Degree"></option>
                  <option value="PhD"></option>
                  <option value="Diploma"></option>
                </datalist>
              </div>

              <div class="form-rows">
                <input list="years-experience-options" id="years-experience" class="dropdowns" placeholder="Years of Experience *" />
                <datalist id="years-experience-options">
                  <option value="0-1 Year"></option>
                  <option value="2-3 Years"></option>
                  <option value="4-5 Years"></option>
                  <option value="6+ Years"></option>
                </datalist>
              </div>

              <div class="form-rows">
                <input list="current-job-function-options" id="current-job-function" class="dropdowns" placeholder="Current Job Function *" />
                <datalist id="current-job-function-options">
                  <option value="IT"></option>
                  <option value="Marketing"></option>
                  <option value="Sales"></option>
                  <option value="HR"></option>
                </datalist>
              </div>

              <div class="form-rows">
                <input list="desired-job-function-options" id="desired-job-function" class="dropdowns" placeholder="Desired Job Function *" />
                <datalist id="desired-job-function-options">
                  <option value="IT"></option>
                  <option value="Marketing"></option>
                  <option value="Sales"></option>
                  <option value="HR"></option>
                </datalist>
              </div>


              <div class="form-rows">
                <input list="availability-options" id="availability" class="dropdowns" placeholder="Availability *" />
                <datalist id="availability-options">
                  <option value="Immediately"></option>
                  <option value="1 Week"></option>
                  <option value="2 Weeks"></option>
                  <option value="1 Month"></option>
                </datalist>
              </div>

              <div className="form-rowz">
                <label htmlFor="cv-upload" className="upload-label">Optionally upload a CV</label>
                <div className="custom-file-upload">
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx,.rtf"
                    onChange={handleFileChange}  // <-- Add this to handle file change
                  />
                  <label htmlFor="cv-upload" className="upload-button">Choose File</label>
                  <span id="file-name" className="file-name">{fileName}</span> {/* Display the selected file name */}
                </div>
                <p className="upload-info">
                  Maximum size: 10MB. You can skip the CV upload on sign-up but will need it to apply for jobs.
                </p>
              </div>


              <div class="form-rows">
                <input type="checkbox" id="email-alerts" />
                <label for="email-alerts">
                  I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>

              <div class="form-rows">
                <button type="submit" class="signup-button">Create Account</button>
              </div>
            </form>

            <p className="terms">
              By creating an account, you agree to the <a href="#">Terms of Service</a>.
            </p>

            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </section>

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
    </div >

  );
};

export default JobSeekerPage;