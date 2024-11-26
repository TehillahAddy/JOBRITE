import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import surveyImage from '../images/surveyo.jpeg';
import surveyImage1 from '../images/survey2.png';
import surveyImage2 from '../images/survey3.png';
import surveyImage3 from '../images/survey4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; // Correct module imports
import 'swiper/css'; // Core Swiper CSS
import 'swiper/css/navigation'; // Navigation module CSS
import 'swiper/css/autoplay'; // Autoplay module CSS

import AOS from 'aos';
import 'aos/dist/aos.css';



const LandingPage = () => {
  const popularJobs = [
    {
      image: "https://via.placeholder.com/80",
      title: "Software Developer",
      description: "Create and maintain software solutions.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/80",
      title: "Graphic Designer",
      description: "Design compelling visuals for clients.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/80",
      title: "Digital Marketer",
      description: "Manage online campaigns effectively.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/80",
      title: "Project Manager",
      description: "Oversee and deliver projects on time.",
      link: "#",
    },
  ];
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

        {/* Job Search Section */}
        <section className="job-search-section">
          <div className="search-bar">
            <input type="text" placeholder="Job Title, Keywords, or Company" />
            <input type="text" placeholder="Location (City, State, Zip)" />
            <button type="button">Search</button>
          </div>
        </section>
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
            <h3>Customized service with clear expectations set.</h3>
            <p>For employers, Jobrite offers customizable survey templates to help you find the best candidates for your organization.</p>
          </div>

          <div className="feature" data-aos="fade-up" data-aos-duration="1200">
            <img src={surveyImage2} alt="Real-Time Analytics" />
            <h3>Real-Time Job Analytics</h3>
            <p>Track job applications and candidate progress in real time. Make data-driven decisions with ease.</p>
          </div>

          <div className="feature" data-aos="fade-up" data-aos-duration="1200">
            <img src={surveyImage3} alt="Multi-Channel Distribution" />
            <h3>Your round-the-clock strategic business ally.</h3>
            <p>Reach a wide audience with our multi-channel job distribution network. Get your job listings in front of the right people.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action for Employers */}
      <section className="employer-cta" data-aos="zoom-in" data-aos-delay="600">
        <h2>Hire the Best Talent</h2>
        <p>Looking for the right candidates? Post your job listings today and let us connect you with top talent.</p>
        <Link to="/employer/post-job" className="cta-button">Post a Job</Link>
      </section>

      {/* Popular Jobs Section */}
      <section className="popular-jobs-section">
        <h2>Popular Jobs</h2>
        <Swiper
          spaceBetween={10} /* Minimal spacing between slides */
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          className="jobs-slider"
        >

          {popularJobs.map((job, index) => (
            <SwiperSlide key={index}>
              <div className="job-card">
                <img src={surveyImage} alt={job.title} className="job-image" />
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <a href={job.link} className="apply-btn">Apply Now</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Blog Section */}
      <section className="blog-section" data-aos="fade-down" data-aos-delay="1300">
        <h2>Latest Articles</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-image">
              <img src={surveyImage1} alt="Resume Tips" />
            </div>
            <div className="blog-content">
              <h3>Top 10 Resume Tips</h3>
              <p>Learn how to craft a resume that stands out to employers.</p>
              <Link to="/blog/resume-tips" className="read-more">Read More</Link>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-image">
              <img src={surveyImage2} alt="Interview Questions" />
            </div>
            <div className="blog-content">
              <h3>Common Interview Questions</h3>
              <p>Prepare for your next interview with these top questions.</p>
              <Link to="/blog/interview-questions" className="read-more">Read More</Link>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-image">
              <img src={surveyImage3} alt="Career Growth" />
            </div>
            <div className="blog-content">
              <h3>Career Growth Strategies</h3>
              <p>Discover tips to take your career to the next level.</p>
              <Link to="/blog/career-growth" className="read-more">Read More</Link>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 data-aos="fade-up" data-aos-duration="1000">What Our Users Say</h2>
        <div className="testimonial" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200">
          <p>"They were professional, responsive, and found the perfect job match for me. Thank you ☺️"</p>
          <span>- Sweetness Lyrical, Job Seeker</span>
        </div>
        <div className="testimonial" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200">
          <p>"The Best Customer Experience, they promised and delivered… thank you soo much for the opportunity jobrite💯"</p>
          <span>- Abena Adomaa, Job Seeker</span>
        </div>
      </section>


      <div class="section" data-aos="fade-up" data-aos-duration="1500">
        <h1>Advance your career
          with  Jobrite!</h1>
      </div>

      <div class="section" data-aos="zoom-in" data-aos-delay="1000">
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
