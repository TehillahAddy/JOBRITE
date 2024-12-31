import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./LoginPage.css";
import React, { useState } from 'react';
import './JobSeekerPage.css';
import { NavLink } from 'react-router-dom';
import surveyImage from '../images/surveyo.jpeg';
import { SocialIcon } from 'react-social-icons';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // State for error messages
    const navigate = useNavigate(); // useNavigate hook from react-router-dom

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log('Login successful:', res.data);
            // Check if token is received
            if (res.data.token) {
                console.log('Token received:', res.data.token);
            } else {
                console.log('No token received');
            }
            // Store token, redirect, etc.
            localStorage.setItem('token', res.data.token); // Example of storing the token
            navigate('/dashboard'); // Redirect to dashboard or another page
        } catch (err) {
            console.error('Error logging in:', err.response.data);
            setErrorMessage(err.response.data.message || 'Login failed'); // Set error message state
        }
    };
    return (
        <div className="login-page">
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
                            <a href="/employ" className="dropdown-trigger">
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

            <section className="login-section">
                <div className="login-container">
                    <h2 className="login-title">Log in and get productive</h2>
                    <p className="login-description">Use your social account to log in.</p>
                    <div className="social-login">
                        <div className="social-icon-container fb">
                            <SocialIcon url="https://facebook.com" bgColor="#3b5998" />
                        </div>
                        <div className="social-icon-container google">
                            <SocialIcon url="https://google.com" bgColor="#db4437" />
                        </div>
                        <div className="social-icon-container linkedin">
                            <SocialIcon url="https://linkedin.com" bgColor="#0077b5" />
                        </div>
                    </div>
                    <div className="divider">
                        <span>Or continue with</span>
                    </div>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="options">
                            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                            <label className="keep-logged-in">
                                <input type="checkbox" />
                                Keep me logged in
                            </label>
                        </div>
                        <button className="login-button" type="submit">Log in</button>
                          {/* Display error message if any */}
                          {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                    <div className="login-footer">
                        <p>
                            Don't have an account? <a href="/signup-job-seeker">Sign up</a>
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
        </div>
    );
};

export default LoginPage;
