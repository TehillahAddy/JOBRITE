import React, { useState, useEffect, useRef } from "react";
import "./EmployerPage.css";

const EmployerPage = () => {
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

  const passwordInputRef = useRef(null);  // Reference to the password input field
  const tooltipRef = useRef(null);  // Reference to the tooltip

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setShowPasswordTooltip(value.length > 0); // Show tooltip only if the password field is not empty
  };

  // Close the tooltip if clicking outside of the password input or tooltip
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        passwordInputRef.current && !passwordInputRef.current.contains(e.target) &&
        tooltipRef.current && !tooltipRef.current.contains(e.target)
      ) {
        setShowPasswordTooltip(false);
      }
    };

    // Add event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const dropdownData = {
    days: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
    months: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    years: Array.from({ length: 100 }, (_, i) => `${new Date().getFullYear() - i}`),
    countries: ["Ghana", "Nigeria", "USA", "UK", "South Africa", "Canada"],
  };

  const SearchableDropdown = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setSearchTerm("");
      setIsOpen(false);
    };

    return (
      <div className="dropdown-container">
        <label>{label} *</label>
        <div
          className="dropdown-display"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
        >
          {selectedOption || `Select ${label}`}
          <span className="dropdown-arrow">▼</span>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            <input
              type="text"
              placeholder="Search..."
              className="dropdown-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="dropdown-options">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, idx) => (
                  <li
                    key={idx}
                    className="dropdown-option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))
              ) : (
                <li className="no-options">No options found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="signup-container">
      <div className="signup-forms">
        <h2>Personal Information</h2>
        <p className="form-info">This is information pertaining to you as an individual</p>

        <form>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" placeholder="Enter your last name" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Create Password *</label>
              <div className="password-input">
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => validatePassword(e.target.value)}
                />
                <span
                  className="info-icon"
                  onClick={() => setShowPasswordTooltip(!showPasswordTooltip)}
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
              </div>
              <div className="password-validation">
                <div className={`validation-line ${passwordCriteria.hasUppercase ? "valid" : ""}`}></div>
                <div className={`validation-line ${passwordCriteria.hasLowercase ? "valid" : ""}`}></div>
                <div className={`validation-line ${passwordCriteria.hasNumber ? "valid" : ""}`}></div>
                <div className={`validation-line ${passwordCriteria.hasSpecialChar ? "valid" : ""}`}></div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </p>
          <div className="form-actions">
            <button type="submit" className="next-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerPage;
