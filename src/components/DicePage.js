import React, { useState, useEffect } from 'react';
import './DicePage.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import surveyImage from '../images/surveyo.jpeg';


const DicePage = () => {

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

  useEffect(() => {
    const dice = document.querySelector('.dice'); // Select the dice element
    const rollBtn = document.querySelector('.roll'); // Select the Roll button

    // Function to generate a random number and roll the dice
    const rollDice = () => {
      const random = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6

      // Add rolling animation
      dice.style.animation = 'rolling 1s ease-in-out';

      // After animation ends, apply the appropriate rotation
      setTimeout(() => {
        switch (random) {
          case 1:
            dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
            break;
          case 2:
            dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
            break;
          case 3:
            dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
            break;
          case 4:
            dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
            break;
          case 5:
            dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
            break;
          case 6:
            dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
            break;
        }
        // Remove animation after execution
        dice.style.animation = 'none';
      }, 1000); // Match the duration of the animation
    };

    // Add click event listener to the roll button
    rollBtn.addEventListener('click', rollDice);

  }, []);

  return (
    <div className='dice-page'>
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


      <section class="career-dice-section">
        <div class="career-dice-container">
          <h1>Career Dice/Dice</h1>
          <p>
            The Career Dice is an exciting and interactive feature designed to make your job search not only effective but also engaging. It adds a fun, game-like element to finding your next job while ensuring you are matched with opportunities that suit your skills and interests.
          </p>
          <h2>How It Works:</h2>
          <ol>
            <li>After registering and paying the required fee, you’ll gain access to the Career Dice feature on our website.</li>
            <li>Simply click on the dice, and watch as it rolls, creating a moment of suspense and excitement.</li>
            <li>Once it stops rolling, the dice will reveal three tailored job options based on your profile, qualifications, and preferences.</li>
          </ol>
          <h2>Why Use Career Dice?</h2>
          <ul>
            <li><strong>Personalized Matches:</strong> The dice uses advanced algorithms to ensure that the job options it presents are well-suited to your unique abilities and career goals.</li>
            <li><strong>Element of Fun:</strong> Turn your job search into an enjoyable experience, breaking away from traditional application methods.</li>
            <li><strong>Empowering Choices:</strong> With three job options to choose from, you remain in control of your career path, deciding which opportunity aligns best with your aspirations.</li>
            <li><strong>Efficient Process:</strong> Save time by receiving curated opportunities instantly, allowing you to focus on making informed decisions.</li>
          </ul>
          <p>
            The Career Dice is more than just a tool – it’s a dynamic way to explore your career potential, discover exciting opportunities, and take the next step toward your dream job. Roll the dice and watch your career options unfold!
          </p>
          <div class="roll-dice-action">
            <button class="roll-dice-btn">Roll the Dice!</button>
            <p>Click the button below to roll the dice and see where it lands.</p>
          </div>
        </div>
      </section>

      <section className="dicee-section">
        <div class="containers">
          <div class="dice">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
            <div class="face right"></div>
            <div class="face left"></div>
          </div>
          <button class="roll">
            Roll Dice
          </button>
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

export default DicePage;
