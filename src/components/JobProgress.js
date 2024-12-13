import React from "react";
import "./JobProgress.css";

const JobProgress = () => {
    return (
        <div className="job-progress-page">


            {/* Main Container */}
            <div className="progress-container">
                {/* Timeline Tracker */}
                <div className="tracker-container">
                    {/* Step 1 */} {/* Header Section */}
                    <header className="header">
                        <h1>Track Your Job Application Progress</h1>
                    </header>
                    <div className="tracker-step completed">
                        <div className="tracker-icon">
                            <i className="fa fa-check-circle"></i>
                        </div>
                        <div className="tracker-text">
                            <strong>Application Submitted</strong>
                            <p>Your application has been successfully submitted.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="tracker-step completed">
                        <div className="tracker-icon">
                            <i className="fa fa-check-circle"></i>
                        </div>
                        <div className="tracker-text">
                            <strong>Review in Progress</strong>
                            <p>Your application is being reviewed by our team.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="tracker-step">
                        <div className="tracker-icon">
                            <i className="fa fa-circle"></i>
                        </div>
                        <div className="tracker-text">
                            <strong>Interview Scheduled</strong>
                            <p>We will contact you to schedule your interview soon.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="tracker-step">
                        <div className="tracker-icon">
                            <i className="fa fa-circle"></i>
                        </div>
                        <div className="tracker-text">
                            <strong>Final Decision</strong>
                            <p>Awaiting the final decision from the employer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobProgress;
