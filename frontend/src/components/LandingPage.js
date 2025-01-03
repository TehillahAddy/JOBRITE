import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import surveyImage from '../images/surveyo.jpeg';
import feature1 from '../images/feature1.avif';
import feature2 from '../images/feature2.webp';
import feature3 from '../images/feature3.jpg';
import feature4 from '../images/feature4.jpeg';
import feature5 from '../images/feature5.jpeg';
import wall1 from '../images/wall1.jpg';

import role from '../images/the-role.jpg';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; // Correct module imports
import 'swiper/css'; // Core Swiper CSS
import 'swiper/css/navigation'; // Navigation module CSS
import 'swiper/css/autoplay'; // Autoplay module CSS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';



const LandingPage = () => {

  const jobData = [
    { id: 1, title: 'Web Developer Needed', salary: '1,500Ghc', location: 'Kaneshie' },
    { id: 2, title: 'IT Technician Needed', salary: '1,500Ghc', location: 'Kaneshie' },
    { id: 3, title: 'Sales Representative Needed', salary: '1,500 - 2,000Ghc', location: 'Kaneshie' },
    { id: 4, title: 'Secretary Needed', salary: '1,300 - 1,500Ghc', location: 'Kaneshie' },
    { id: 5, title: 'Factory Workers Needed', salary: '1,300Ghc', location: 'Kaneshie' },
    { id: 6, title: 'Marketers Needed', salary: '1,000 - 1,200Ghc', location: 'Kaneshie' },
    { id: 7, title: 'Shop Manager Needed', salary: '1,000 - 2,000Ghc', location: 'Madina' },
    { id: 8, title: 'Cashier Needed', salary: '1,000Ghc', location: 'Kaneshie' },
    { id: 9, title: 'Waitress Needed', salary: '1,000Ghc', location: 'Kaneshie' },
    { id: 10, title: 'Front Desk Reporter Needed', salary: '1,000Ghc', location: 'Kaneshie' },
    { id: 11, title: 'Househelp Needed', salary: '800 - 1,200Ghc', location: 'Kaneshie' },
    { id: 12, title: 'Nanny Needed', salary: '750Ghc', location: 'Kaneshie' },
  ];

  const handleJobClick = (id) => {
    navigate(`/login`); // Navigate to the job details page
  };


  useEffect(() => {
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.querySelector('.fa-search');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        if (searchInput.value) {
          searchIcon.style.display = 'none'; // Hide icon when typing
        } else {
          searchIcon.style.display = 'block'; // Show icon when input is empty
        }
      });
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener('input', () => { }); // Cleanup
      }
    };
  }, []);


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


  const articlesTags = [
    'Marketing', 'Public Administration', 'Healthcare', 'Engineering',
    'IT Services', 'Sustainability', 'Business Administration',
    'Telecommunications', 'HR Management',
  ];

  const jobsTags = [
    'Engineering', 'Business Development', 'Finance',
    'Administrative Assistant', 'Retail Associate', 'Customer Service',
    'Operations', 'Information Technology', 'Marketing', 'Human Resources',
  ];


  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);

 


  const partners = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", },
  ];

  const angleIncrement = 360 / partners.length;
  const popularJobs = [
    {
      image: "../images/feature1.avif",
      title: "Software Developer",
      description: "Create and maintain software solutions.",
      link: "#",
    },
    {
      image: "../images/feature2.webpo",
      title: "Graphic Designer",
      description: "Design compelling visuals for clients.",
      link: "#",
    },
    {

      title: "Digital Marketer",
      description: "Manage online campaigns effectively.",
      link: "#",
    },
    {

      title: "Project Manager",
      description: "Oversee and deliver projects on time.",
      link: "#",
    },
  ];
  useEffect(() => {
    AOS.init();
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

  return (
    <div className="landing-page">
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
              to="/jsd" className={({ isActive }) => isActive ? "active-link" : ""} > Contacts
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

      <section className="job-search-section" >
        <div className="job-tickers">
          <ul>
            {jobData.map((job) => (
              <li
                key={job.id}
                className="job-item"
                onClick={() => handleJobClick(job.id)}
              >
                <div className="job-info">
                  <span className="job-title">{job.title}</span>
                  <div className="job-salary-location">
                    <span className="job-salary">{job.salary}</span><span className="job-location">
                      <i className="fas fa-map-marker-alt"></i> {job.location}
                    </span>

                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="job-search"  >
        <form className="job-search-form" >
          <div className="search-containers">
            <div className="inputs-wrapper">
              <i className="fa fa-briefcase"></i>
              <input
                type="text"
                id="job-title"
                placeholder="Job title, keywords, or company"
              />
            </div>

            <div className="inputs-wrapper">
              <i className="fa fa-map-marker-alt"></i>
              <input
                type="text"
                id="job-location"
                placeholder="City, state, or zip code"
              />
            </div>
            <button type="button">Search</button>
          </div>
        </form>
      </section>

      <section className="welcome-section">
        <div className="image-container">
          <img src={feature4} alt="Welcome" className="welcome-image" />
        </div>
        <div className="welcome-text">
          <h2>Welcome to Jobrite!</h2>
          <p>Create an account or sign in to see your personalized job recommendations.</p>
        </div>
      </section>

      <section className="experience-filtering">
        <h3>Find the right job vacancies in Ghana</h3>
        <h2>Experience-Based Filtering</h2>
        <p>Find jobs that suit your experience level</p>
        <div className="filter-carousel">
          <div className="card">
            <h3>Entry Level</h3>
            <p>32,450 jobs</p>
            <a href="/login" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="card">
            <h3>Mid-Level</h3>
            <p>20,867 jobs</p>
            <a href="/login" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="card">
            <h3>Senior Level</h3>
            <p>15,235 jobs</p>
            <a href="/login" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="card">
            <h3>Executive Level</h3>
            <p>5,432 jobs</p>
            <a href="/login" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="card">
            <h3>Unspecified Level</h3>
            <p>42,870 jobs</p>
            <a href="/login" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <button className="posts-job-button">Explore All Jobs</button>
      </section>

      <div className="tags-section">
        <div className="text-container">
          <h2>Explore collaborative articles</h2>
          <p>
            We're unlocking community knowledge in a new way. Experts add insights
            directly into each article, started with the help of AI.
          </p>
        </div>

        <div className="tags-container">
          {articlesTags
            .slice(0, showAllArticles ? articlesTags.length : 8)
            .map((tag, index) => (
              <button key={index} className="tag">
                {tag}
              </button>
            ))}
          <button
            onClick={() => setShowAllArticles(!showAllArticles)}
            className="show-more"
          >
            {showAllArticles ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </div>



      <div className="tags-sections">
        <div className="text-container">
          <h2>Find the right job or internship for you</h2>
        </div>
        <div className="tags-container">
          {jobsTags
            .slice(0, showAllJobs ? jobsTags.length : 8)
            .map((tag, index) => (
              <button key={index} className="tag">
                {tag}
              </button>
            ))}
          <button
            onClick={() => setShowAllJobs(!showAllJobs)}
            className="show-more"
          >
            {showAllJobs ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </div>

      <section class="empathy-map">
        <h2><span class="highlight">|</span> Empathy Map</h2>
        <div class="empathy-content">
          <div class="empathy-item think">
            <h3>What do they <span>Think?</span></h3>
            <ol>
              <li>Am I connecting the right candidates to the right opportunities?</li>
              <li>Is Jobrite’s recruitment process streamlined and efficient enough to meet clients’ expectations?</li>
              <li>Can this agency improve further with better tools for customization and reporting?</li>
              <li>I need a platform that offers deeper insights into candidate performance and client satisfaction.</li>
            </ol>
          </div>
          <div class="empathy-item feel">
            <h3>What do they <span>Feel?</span></h3>
            <ol>
              <li>Frustrated with outdated recruitment processes and a lack of digital tools for customization.</li>
              <li>Concerned about maintaining high-quality placements to retain client trust.</li>
              <li>Confident when using tools and systems that are efficient, intuitive, and transparent.</li>
              <li>Motivated to exceed recruitment targets, improve partnerships, and grow Jobrite’s reputation as the best agency.</li>
            </ol>
          </div>
          <div class="center-image">
            <img src={feature4} alt="Empathy Map" />
          </div>
          <div class="empathy-item does">
            <h3>What do they <span>Do?</span></h3>
            <ol>
              <li>Leverages online platforms to source candidates for client job vacancies.</li>
              <li>Builds strong client relationships by delivering tailored recruitment solutions.</li>
              <li>Actively uses digital tools to track placements, manage applications, and monitor performance.</li>
              <li>Prioritizes tools that ensure data security and streamline the recruitment workflow, such as applicant tracking systems (ATS).</li>
            </ol>
          </div>
          <div class="empathy-item say">
            <h3>What do they <span>Say?</span></h3>
            <ol>
              <li>“I need a recruitment system that’s fast, easy to use, and improves hiring timelines.”</li>
              <li>“Client satisfaction is critical; every hire reflects our reputation.”</li>
              <li>“Tracking candidates and client feedback should be simple and effective.”</li>
              <li>“I prefer tools that help me focus on building relationships and securing vacancies, not paperwork.”</li>
            </ol>
          </div>
        </div>
      </section>


      <section class="collaborative-articles">
        <h2>Explore Collaborative Articles</h2>
        <p>Discover insights and share your knowledge with the community.</p>
        <div class="article-cards">
          <div class="article-card">
            <img src={role} alt="Technology" class="card-image"></img>
            <h3>Technology</h3>
            <p>Innovations shaping the future of industries.</p>
            <a href="/" class="explore-btn">Explore</a>
          </div>
          <div class="article-card">
            <img src={feature3} alt="Leadership" class="card-image"></img>
            <h3>Leadership</h3>
            <p>Strategies for effective leadership and management.</p>
            <a href="/" class="explore-btn">Explore</a>
          </div>
          <div class="article-card">
            <img src={feature2} alt="Career Growth" class="card-image"></img>
            <h3>Career Growth</h3>
            <p>Insights to advance your professional journey.</p>
            <a href="/" class="explore-btn">Explore</a>
          </div>
        </div>
      </section>


      {/* Popular Jobs Section */}
      <section className="popular-jobs-section" >
        <h2 data-aos="flip-left" data-aos-delay="200" data-aos-duration="1200">Popular Jobs</h2>
        <Swiper data-aos="fade-down" data-aos-delay="200" data-aos-duration="1200"
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
      <section className="blog-section" >
        <h2 data-aos="flip-left" data-aos-delay="200" data-aos-duration="1200">Latest Articles</h2>
        <div className="blog-grid">
          <div className="blog-wrapper" data-aos="fade-up-left" data-aos-duration="1200" data-aos-delay="300">
            <div className="blog-card">
              <div className="blog-image">
                <img src={feature5} alt="Resume Tips" />
              </div>
              <div className="blog-content">
                <h3>Top 10 Resume Tips</h3>
                <p>Learn how to craft a resume that stands out to employers.</p>
                <Link to="/blog/resume-tips" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
          <div className="blog-wrapper" data-aos="fade-down-right" data-aos-duration="1200" data-aos-delay="300">
            <div className="blog-card">
              <div className="blog-image">
                <img src={feature1} alt="Interview Questions" />
              </div>
              <div className="blog-content">
                <h3>Common Interview Questions</h3>
                <p>Prepare for your next interview with these top questions.</p>
                <Link to="/blog/interview-questions" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
          <div className="blog-wrapper" data-aos="fade-up-left" data-aos-duration="1200" data-aos-delay="300">
            <div className="blog-card">
              <div className="blog-image">
                <img src={feature3} alt="Career Growth" />
              </div>
              <div className="blog-content">
                <h3>Career Growth Strategies</h3>
                <p>Discover tips to take your career to the next level.</p>
                <Link to="/blog/career-growth" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
          <div className="blog-wrapper" data-aos="fade-down-right" data-aos-duration="1200" data-aos-delay="300">
            <div className="blog-card">
              <div className="blog-image">
                <img src={wall1} alt="Career Growth" />
              </div>
              <div className="blog-content">
                <h3>Career Growth Strategies</h3>
                <p>Discover tips to take your career to the next level.</p>
                <Link to="/blog/career-growth" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 data-aos="flip-left" data-aos-delay="200" data-aos-duration="1200">- What Our Users Say -</h2>
        <div className="testimonial" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200">
          <p>"They were professional, responsive, and found the perfect job match for me. Thank you ☺️"</p>
          <span>- Sweetness Lyrical, Job Seeker</span>
        </div>
        <div className="testimonial" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200">
          <p>"The Best Customer Experience, they promised and delivered… thank you soo much for the opportunity jobrite💯"</p>
          <span>- Abena Adomaa, Job Seeker</span>
        </div>
      </section>


      {/* Call-to-Action for Employers */}
      <section class="employer-cta-wrapper">
        <h2 data-aos="flip-left" data-aos-delay="200" data-aos-duration="1200">- Info -</h2>
        <div className="employer-cta" data-aos="zoom-out-up" data-aos-duration="1200" data-aos-delay="400">
          <div className="employer-cta-container">
            <div className="employer-cta-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
              <div className="employer-cta-image" data-aos="fade-in" data-aos-delay="500" data-aos-duration="1200">
                <img src={feature2} alt="Hire Top Talent" />
              </div>
              <h2>Hire Top Talent Effortlessly</h2>
              <p>
                Simplify your hiring process. Post your job openings and gain access to a pool of qualified candidates ready to make an impact.
              </p>
              <Link to="/employer/post-job" className="cta-button">Get Started</Link>
            </div>
          </div>
        </div>


        {/* Right Section: Why Choose Us */}
        <div className="employer-cta" data-aos="zoom-out-down" data-aos-duration="1200" data-aos-delay="400">
          <div className="employer-cta-container">
            <div className="employer-cta-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
              <div className="employer-cta-image" data-aos="fade-in" data-aos-delay="500" data-aos-duration="1200">
                <img src={feature3} alt="Hire Top Talent" />
              </div>
              <h2>Hire Top Talent Effortlessly</h2>
              <p>
                Simplify your hiring process. Post your job openings and gain access to a pool of qualified candidates ready to make an impact.
              </p>
              <Link to="/employer/post-job" className="cta-button">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-wheel-section">
        <h2 data-aos="flip-left" data-aos-delay="200" data-aos-duration="1200" >OUR TRUSTED PARTNERS</h2>
        <p data-aos="zoom-in" data-aos-delay="1000">Discover the companies that trust us to connect them with top talent.</p>
        <div class="section" data-aos="flip-right" data-aos-delay="200" data-aos-duration="1200">
          <h1>Advance your career
            with  Jobrite!</h1>
        </div>

        <div class="section" data-aos="zoom-in" data-aos-delay="1000" >
          <p>Find the job of your dreams.</p>
        </div>
        <div class="section" id="cta-section" data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-out-cubic">
        </div>
        <div className="partner-wheel-section">
          <div className="partner-wheel">
            <div className="wheel">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="wheel-segment"
                  style={{ "--angle": angleIncrement * index }}
                >
                  <a href={partner.link} target="_blank" rel="noopener noreferrer">
                    <img src={partner.logo} alt={partner.name} />
                  </a>
                </div>
              ))}
            </div>
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

export default LandingPage;
