import React, { useEffect, useState } from 'react';
import './EmploymentPage.css'; // Import CSS for styling
import { FaCheckCircle } from 'react-icons/fa'; // Importing a checkmark icon
import './JobSeekerPage.css';
import { NavLink } from 'react-router-dom';

import surveyImage from '../images/surveyo.jpeg';
import { useNavigate } from 'react-router-dom';


const EmploymentPage = () => {

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


    // Add the event listener for the menu toggle
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


    const initialStages = [
        { name: 'Registration', level: 90, status: 'completed' },
        { name: 'Interview', level: 85, status: 'completed' },
        { name: 'Guarantor', level: 75, status: 'in-progress' },
        { name: 'Assesment', level: 60, status: 'not-started' },
        { name: 'Hired', level: 80, status: 'not-started' },
    ];

    const [applicationStages, setApplicationStages] = useState([]);
    const [notification, setNotification] = useState('');
    const [serialCode, setSerialCode] = useState('');
    const [isCodeValid, setIsCodeValid] = useState(false); // Track if the serial code is valid
    const [userProgressVisible, setUserProgressVisible] = useState(false); // Track visibility of user progress

    // Mock function to simulate API call
    const fetchApplicationStages = async () => {
        // Replace this with your actual API call
        setApplicationStages(initialStages);
    };

    useEffect(() => {
        const fetchApplicationStages = async () => {
            // Your fetch logic here
        };

        if (isCodeValid) {
            fetchApplicationStages();
            setUserProgressVisible(true); // Show user progress after valid code
        }
    }, [isCodeValid]);


    // Calculate overall progress
    const overallProgress = Math.round(
        applicationStages.reduce((total, stage) => total + stage.level, 0) / applicationStages.length
    );

    const handleSerialCodeSubmit = (e) => {
        e.preventDefault();

        // Simulated valid codes for demonstration
        const validCodes = ["USER12345", "EMPLOYEE67890"]; // Replace with actual validation logic

        if (validCodes.includes(serialCode)) { // Check if the entered code is valid
            setIsCodeValid(true);
            setNotification("Serial code accepted. You can now view your progress.");
        } else {
            setNotification("Invalid serial code. Please try again.");
            setIsCodeValid(false);
            setUserProgressVisible(false); // Hide user progress on invalid code
        }

        // Clear notification after a few seconds
        setTimeout(() => {
            setNotification('');
        }, 3000);
    };

    return (
        <div className="Employer-Page">
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
                            <a href="/skills" className="dropdown-trigger">
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
                            <a href="/employ" className="dropdown-trigger">
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
                        <NavLink to="/login" className="auth-link">Sign In</NavLink>
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

            <div className="general-container">
                <div className="employment-page">
                    <div className="text-container">
                        <h1>Employment Tracker</h1>
                        <p>
                            The Employment Tracker is a revolutionary tool that gives job seekers complete visibility and control over their employment journey. Designed exclusively for applicants who have visited our office, this feature ensures a transparent, step-by-step guide to securing your dream job.
                        </p>
                        <h2>How It Works:</h2>
                        <ol>
                            <li><strong>Registration Process and Interview:</strong> Begin your journey by registering at our office and completing your interview. Once the interview is conducted, you’ll receive a unique serial code to access the Employment Tracker.</li>
                            <li><strong>Guarantor and Background Check:</strong> After registration, we initiate a thorough screening process. The tracker keeps you updated on the status of these steps.</li>
                            <li><strong>Assessment:</strong> Your skills and qualifications are assessed to match you with suitable job opportunities.</li>
                            <li><strong>Hired:</strong> Once all processes are completed, you’ll be offered job positions based on your profile.</li>
                        </ol>
                        <p>The Employment Tracker streamlines the hiring process, keeping you informed at every stage.</p>

                        {/* Serial Code Input */}
                        <form onSubmit={handleSerialCodeSubmit} className="serial-code-form">
                            <label htmlFor="serial-code">Enter Serial Code:</label>
                            <input
                                type="text"
                                id="serial-code"
                                value={serialCode}
                                onChange={(e) => setSerialCode(e.target.value)}
                                required
                                placeholder="Enter your serial code"
                            />
                            <button type="submit">Submit</button>
                        </form>

                        {/* Notification area */}
                        {notification && <div className="notification">{notification}</div>}
                    </div>

                    {/* Right Container for User Progress */}
                    <div className="container">
                        {!userProgressVisible ? (
                            <h2>Please enter your serial code to view your progress.</h2>
                        ) : (
                            <>
                                <h1 className="title-text">Your Application Progress</h1>
                                <div className="progress-summary">
                                    <span>Overall Progress: {overallProgress}%</span>
                                </div>

                                {applicationStages.map((stage, index) => (
                                    <div className="skill-box" key={index}>
                                        <div className="stage-indicator">
                                            {stage.status === 'completed' && <FaCheckCircle className="check-icon" />}
                                            <span className={`line ${stage.status === 'completed' ? 'completed-line' : ''}`}></span>
                                        </div>
                                        <span className="title">{stage.name}</span>
                                        <div className="skill-bar">
                                            <span
                                                className={`skill-per ${stage.status}`}
                                                style={{ width: `${stage.level}%` }}
                                            >
                                                <span className="tooltip">{stage.level}%</span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
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

export default EmploymentPage;
