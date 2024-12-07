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
import wall2 from '../images/wall2.webp';
import wall3 from '../images/wall3.webp';
import wall4 from '../images/wall4.webp';
import role from '../images/the-role.jpg';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; // Correct module imports
import 'swiper/css'; // Core Swiper CSS
import 'swiper/css/navigation'; // Navigation module CSS
import 'swiper/css/autoplay'; // Autoplay module CSS
import AOS from 'aos';
import 'aos/dist/aos.css';



const LandingPage = () => {


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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = 100; // Change background after 100px scroll
      setIsScrolled(window.scrollY > scrollPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            <Link
              to="/dice"
              className={({ isActive }) => isActive ? "active-link" : ""} > Dice
            </Link>
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
          <NavLink to="/signin" className="auth-link">Sign In</NavLink>
          <span className="separator">|</span>
          <NavLink to="/signup" className="auth-link signup">Sign Up</NavLink>
          <button className="post-job-button">Post a Job</button>
        </div>
      </nav>

      <section className="job-search"  >
        <form className="job-search-form" data-aos="flip-right" data-aos-delay="200" data-aos-duration="1200">
          <div className="search-containers">
            <div className="input-wrapper">
              <i className="fa fa-briefcase"></i>
              <input
                type="text"
                id="job-title"
                placeholder="Job title, keywords, or company"
              />
            </div>

            <div className="input-wrapper">
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

      <section className="job-search-section" data-aos="flip-left" data-aos-delay="200" data-aos-duration="1200">

      </section>

      <section className="job-search-section" data-aos="flip-left" data-aos-delay="200" data-aos-duration="1200">
        <div className="job-ticker">
          <ul>
            <li className="minus">
              <span className="metric">Tech Jobs</span>
              <span className="value">125,000</span>
              <span className="change">-2,000 (-1.6%)</span>
            </li>
            <li className="plus">
              <span className="metric">Healthcare Jobs</span>
              <span className="value">89,300</span>
              <span className="change">+1,500 (+1.7%)</span>
            </li>
            <li className="plus">
              <span className="metric">Remote Positions</span>
              <span className="value">76,450</span>
              <span className="change">+800 (+1.1%)</span>
            </li>
            <li className="minus">
              <span className="metric">Manufacturing</span>
              <span className="value">52,000</span>
              <span className="change">-500 (-0.9%)</span>
            </li>
            <li className="plus">
              <span className="metric">Software Development</span>
              <span className="value">43,800</span>
              <span className="change">+1,200 (+2.8%)</span>
            </li>
            <li className="minus">
              <span className="metric">Customer Service</span>
              <span className="value">65,700</span>
              <span className="change">-1,100 (-1.6%)</span>
            </li>
            <li className="plus">
              <span className="metric">Education</span>
              <span className="value">34,200</span>
              <span className="change">+600 (+1.8%)</span>
            </li>
            <li className="minus">
              <span className="metric">Retail</span>
              <span className="value">20,500</span>
              <span className="change">-300 (-1.4%)</span>
            </li>
          </ul>
          <ul aria-hidden="true">
            <li className="minus">
              <span className="metric">Tech Jobs</span>
              <span className="value">125,000</span>
              <span className="change">-2,000 (-1.6%)</span>
            </li>
            <li className="plus">
              <span className="metric">Healthcare Jobs</span>
              <span className="value">89,300</span>
              <span className="change">+1,500 (+1.7%)</span>
            </li>
            <li className="plus">
              <span className="metric">Remote Positions</span>
              <span className="value">76,450</span>
              <span className="change">+800 (+1.1%)</span>
            </li>
            <li className="minus">
              <span className="metric">Manufacturing</span>
              <span className="value">52,000</span>
              <span className="change">-500 (-0.9%)</span>
            </li>
            <li className="plus">
              <span className="metric">Software Development</span>
              <span className="value">43,800</span>
              <span className="change">+1,200 (+2.8%)</span>
            </li>
            <li className="minus">
              <span className="metric">Customer Service</span>
              <span className="value">65,700</span>
              <span className="change">-1,100 (-1.6%)</span>
            </li>
            <li className="plus">
              <span className="metric">Education</span>
              <span className="value">34,200</span>
              <span className="change">+600 (+1.8%)</span>
            </li>
            <li className="minus">
              <span className="metric">Retail</span>
              <span className="value">20,500</span>
              <span className="change">-300 (-1.4%)</span>
            </li>
          </ul>
        </div>
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
            <a href="/entry-level-jobs" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="card">
            <h3>Mid-Level</h3>
            <p>20,867 jobs</p>
            <a href="/mid-level-jobs" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="card">
            <h3>Senior Level</h3>
            <p>15,235 jobs</p>
            <a href="/senior-level-jobs" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="card">
            <h3>Executive Level</h3>
            <p>5,432 jobs</p>
            <a href="/executive-level-jobs" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="card">
            <h3>Unspecified Level</h3>
            <p>42,870 jobs</p>
            <a href="/unspecified-jobs" className="explore-link">
              Explore Jobs <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <button className="posts-job-button">Explore All Jobs</button>
      </section>


      {/* Features Section */}
      <section className="features-section" data-aos="bounce" data-aos-delay="500">
        <h2 className="features-title" data-aos="flip-left" data-aos-delay="200" data-aos-duration="1200">Why Choose Jobrite??</h2>
        <div className="features-grid" >
          <div className="feature-wrapper" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <div className="feature">
              <h3>Effortless Job Application</h3>
              <div className="feature-icon">
                <i className="fas fa-paper-plane"></i> {/* Example icon for Effortless Job Application */}
              </div>
              <p>Our intuitive platform allows you to search for and apply to jobs with ease. Get started with just a few clicks.</p>
            </div>
          </div>

          <div className="feature-wrapper" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
            <div className="feature">
              <h3>Customized service with clear expectations set.</h3>
              <div className="feature-icon">
                <i className="fas fa-user-cog"></i> {/* Example icon for Customized Service */}
              </div>
              <p>For employers, Jobrite offers customizable survey templates to help you find the best candidates for your organization.</p>
            </div>
          </div>

          <div className="feature-wrapper" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <div className="feature">
              <h3>Real-Time Job Analytics</h3>
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i> {/* Example icon for Real-Time Analytics */}
              </div>
              <p>Track job applications and candidate progress in real time. Make data-driven decisions with ease.</p>
            </div>
          </div>

          <div className="feature-wrapper" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
            <div className="feature" >
              <h3>Your round-the-clock strategic business ally.</h3>
              <div className="feature-icon">
                <i className="fas fa-briefcase"></i> {/* Example icon for Strategic Business Ally */}
              </div>
              <p>Reach a wide audience with our multi-channel job distribution network. Get your job listings in front of the right people.</p>
            </div>
          </div>
        </div>
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

      <section className="dicee-section">
        <div class="container">
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



      <section class="collaborative-articles">
        <h2>Explore Collaborative Articles</h2>
        <p>Discover insights and share your knowledge with the community.</p>
        <div class="article-cards">
          <div class="article-card">
            <img src={role} alt="Technology" class="card-image"></img>
            <h3>Technology</h3>
            <p>Innovations shaping the future of industries.</p>
            <a href="#" class="explore-btn">Explore</a>
          </div>
          <div class="article-card">
            <img src={feature3} alt="Leadership" class="card-image"></img>
            <h3>Leadership</h3>
            <p>Strategies for effective leadership and management.</p>
            <a href="#" class="explore-btn">Explore</a>
          </div>
          <div class="article-card">
            <img src={feature2} alt="Career Growth" class="card-image"></img>
            <h3>Career Growth</h3>
            <p>Insights to advance your professional journey.</p>
            <a href="#" class="explore-btn">Explore</a>
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
