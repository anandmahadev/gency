// ==========================================================================
// Aether Studio - React Application Architecture
// ==========================================================================

const { useState, useEffect, useRef } = React;

// --- Lightweight SVG Icon Components ---
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const PaletteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.03444 19.1759 5.25055 19.3242 5.50055 19.4242C6.00055 19.6242 6.50055 19.1242 6.50055 18.5C6.50055 17.6716 7.17157 17 8 17H9C9.82843 17 10.5 17.6716 10.5 18.5V21C10.5 21.5523 10.9477 22 11.5 22H12Z"/><circle cx="7.5" cy="10.5" r="1.5"/><circle cx="11.5" cy="7.5" r="1.5"/><circle cx="16.5" cy="9.5" r="1.5"/></svg>
);

const MonitorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5 5 3Z"/><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z"/></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

// --- React Sub-Components ---

// 1. Sticky Navigation Bar Component
const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section on scroll
      const sections = ['home', 'services', 'portfolio', 'estimator', 'contact'];
      const scrollPos = window.scrollY + 120;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo" onClick={closeMobileMenu}>
          AETHER<span className="logo-dot"></span>
        </a>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={activeSection === 'services' ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              className={activeSection === 'portfolio' ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#estimator" 
              className={activeSection === 'estimator' ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Cost Estimator
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle Light/Dark Theme"
            id="theme-toggler"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          
          <a href="#contact" className="btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Build Site
          </a>
          
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)} id="mobile-menu-btn">
            <span style={{ transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
            <span style={{ opacity: isOpen ? 0 : 1 }}></span>
            <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

// 2. Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-mesh"></div>
      <div className="hero-mesh-2"></div>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">
            <span style={{ color: 'var(--accent-cyan)' }}>●</span> Digital Innovation Hub
          </div>
          <h1>Crafting the Future of <span className="gradient-text">Interactive</span> Design</h1>
          <p>
            Aether Studio is a premium creative agency executing cutting-edge brand aesthetics, highly-interactive web engineering, and immersive tech ecosystems.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary" id="hero-portfolio-btn">
              Explore Portfolio <ArrowRightIcon />
            </a>
            <a href="#estimator" className="btn-secondary" id="hero-estimator-btn">
              Estimate Project
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src="assets/hero_concept.png" alt="Aether Studio Creative Metasphere Art" />
          </div>
          
          {/* Floating Badges */}
          <div className="floating-badge badge-1 glass-panel">
            <div className="floating-badge-icon">
              <PaletteIcon />
            </div>
            <div className="floating-badge-info">
              <h4>Design Thinking</h4>
              <p>Futuristic Aesthetics</p>
            </div>
          </div>

          <div className="floating-badge badge-2 glass-panel">
            <div className="floating-badge-icon">
              <SparklesIcon />
            </div>
            <div className="floating-badge-info">
              <h4>Web3 Tech</h4>
              <p>Holographic Smart Logic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Services Component
const Services = () => {
  const serviceData = [
    {
      id: 'brand',
      icon: <PaletteIcon />,
      title: 'Strategy & Branding',
      desc: 'We sculpt unique brand architectures that resonate with audiences, positioning your business at the absolute pinnacle of industry recognition.',
      highlights: ['Visual Identity Design', 'Brand Guidelines & Books', 'Market Strategy & Research']
    },
    {
      id: 'web',
      icon: <MonitorIcon />,
      title: 'Next-Gen Web Engineering',
      desc: 'We engineer lightning-fast, high-performance web applications using modern component-driven architectures, fluid custom styling, and robust setups.',
      highlights: ['Custom React Applications', 'State-of-the-Art UX/UI Motion', 'API Integrations & Systems']
    },
    {
      id: 'web3',
      icon: <SparklesIcon />,
      title: 'Immersive Web3 & Tech',
      desc: 'We propel you into the future of digital experience by crafting fully interactive web platforms, decentralized integrations, and high-tech modular elements.',
      highlights: ['Decentralized Product Systems', 'Interactive Dashboard Metrics', 'Micro-Animation Engine Setup']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <div className="badge">Expertise</div>
          <h2>Our Architectural Offerings</h2>
          <p>We blend beautiful creative visions with cutting-edge front-end engineering to solve real business challenges.</p>
        </div>
        
        <div className="services-grid">
          {serviceData.map((service) => (
            <div key={service.id} className="service-card glass-panel" id={`service-card-${service.id}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-list">
                {service.highlights.map((highlight, index) => (
                  <li key={index}>
                    <CheckIcon /> {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Filterable Portfolio Component
const Portfolio = () => {
  const categories = ['All', 'Design', 'Development', 'Web3'];
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Aether Premium Brand Identity',
      category: 'Design',
      img: 'assets/project_branding.png',
      tag: 'Branding',
      desc: 'Sophisticated aesthetics for a high-end luxury brand.'
    },
    {
      id: 2,
      title: 'Nova Analytics Cloud Platform',
      category: 'Development',
      img: 'assets/project_dashboard.png',
      tag: 'Web App',
      desc: 'Interactive financial dashboards with high fidelity UI.'
    },
    {
      id: 3,
      title: 'Pulse Health Wellness Companion',
      category: 'Design',
      img: 'assets/project_mobile.png',
      tag: 'Mobile App',
      desc: 'Next-gen health companion mobile design system.'
    },
    {
      id: 4,
      title: 'Nexus Decentral Web3 Hub',
      category: 'Web3',
      img: 'assets/project_web3.png',
      tag: 'Decentralized UI',
      desc: 'Holographic web interface for a cryptosphere exchange.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="badge">Works</div>
          <h2>Featured Masterpieces</h2>
          <p>Witness a handpicked collection of state-of-the-art developments and brand strategies we engineered recently.</p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              id={`portfolio-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item glass-panel" id={`portfolio-item-${project.id}`}>
              <img src={project.img} alt={project.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href="#contact" className="portfolio-link">
                  Build Similar Experience <ArrowRightIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Creative Cost Estimator Component
const CreativeEstimator = ({ addToast }) => {
  const serviceOptions = [
    { id: 'brand', label: 'Brand Strategy', desc: 'Identity & Guidelines', price: 4000 },
    { id: 'design', label: 'UX/UI Design', desc: 'High-Fidelity Mockups', price: 6000 },
    { id: 'dev', label: 'React Engineering', desc: 'Interactive Codebase', price: 8000 },
    { id: 'seo', label: 'SEO & Growth', desc: 'Speed & Organic Reach', price: 3000 }
  ];

  const [selectedServices, setSelectedServices] = useState(['design', 'dev']);
  const [projectScale, setProjectScale] = useState(3); // Slider: 1 = Basic, 3 = Core, 5 = Enterprise
  const [urgency, setUrgency] = useState(2); // Slider: 1 = Standard, 2 = Fast, 3 = Express

  const handleServiceChange = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      } else {
        addToast('Please select at least one core service.', 'info');
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getScaleLabel = (val) => {
    switch (val) {
      case '1': return 'Startup Starter';
      case '2': return 'Standard Business';
      case '3': return 'Premium Core Package';
      case '4': return 'Enterprise Expandable';
      case '5': return 'Elite Global Metasphere';
      default: return 'Premium Core Package';
    }
  };

  const getUrgencyLabel = (val) => {
    switch (val) {
      case '1': return 'Relaxed Timeline (3-4 Months)';
      case '2': return 'Standard Sprint (1.5-2 Months)';
      case '3': return 'Express Deployment (3-4 Weeks)';
      default: return 'Standard Sprint (1.5-2 Months)';
    }
  };

  // Pricing math: Sum(selected service prices) * scale factor * urgency speed-cost factor
  const calculateEstimate = () => {
    let serviceTotal = selectedServices.reduce((acc, currentId) => {
      const option = serviceOptions.find(o => o.id === currentId);
      return acc + (option ? option.price : 0);
    }, 0);

    const scaleFactor = 0.5 + (projectScale * 0.25); // Range: 1(0.75x) to 5(1.75x)
    const urgencyFactor = 0.9 + (urgency * 0.15); // Range: 1(1.05x) to 3(1.35x)
    
    const finalPrice = Math.round(serviceTotal * scaleFactor * urgencyFactor);
    
    // Timeline math: Standard base (8 weeks) minus urgency additions, plus scale additions
    let timelineWeeks = 4 + (selectedServices.length * 2) + (projectScale * 2);
    if (urgency === 1) timelineWeeks = Math.round(timelineWeeks * 1.3);
    if (urgency === 3) timelineWeeks = Math.round(timelineWeeks * 0.5);

    return {
      price: finalPrice.toLocaleString(),
      weeks: timelineWeeks
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="estimator" className="estimator">
      <div className="container">
        <div className="section-header">
          <div className="badge">Interactive Studio</div>
          <h2>Budget & Project Planner</h2>
          <p>Customize your requirements, scale packages dynamically, and inspect simulated cost estimates instantly.</p>
        </div>

        <div className="estimator-card glass-panel">
          <div className="estimator-inputs">
            <h3>Configure Project Scale</h3>
            
            <h4>1. Select Required Services</h4>
            <div className="services-checkboxes">
              {serviceOptions.map((option) => {
                const isSelected = selectedServices.includes(option.id);
                return (
                  <label 
                    key={option.id} 
                    className={`checkbox-label ${isSelected ? 'selected' : ''}`}
                    id={`checkbox-label-${option.id}`}
                  >
                    <input 
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleServiceChange(option.id)}
                    />
                    <div className="checkbox-custom">
                      <CheckIcon />
                    </div>
                    <div className="checkbox-text">
                      <h5>{option.label}</h5>
                      <p>{option.desc}</p>
                    </div>
                  </label>
                );
              })}
            </div>

            <div className="slider-group">
              <div className="slider-header">
                <h4>2. Project Scale & Complexity</h4>
                <span>{getScaleLabel(projectScale.toString())}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={projectScale} 
                onChange={(e) => setProjectScale(parseInt(e.target.value))}
                className="range-slider"
                id="scale-slider"
              />
            </div>

            <div className="slider-group" style={{ marginBottom: 0 }}>
              <div className="slider-header">
                <h4>3. Speed & Urgent Deployment</h4>
                <span>{getUrgencyLabel(urgency.toString())}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="3" 
                value={urgency} 
                onChange={(e) => setUrgency(parseInt(e.target.value))}
                className="range-slider"
                id="urgency-slider"
              />
            </div>
          </div>

          <div className="estimator-results">
            <div className="estimator-result-item">
              <h4>Calculated Investment (Est.)</h4>
              <div className="estimator-price">
                <span className="gradient-text">${estimate.price}</span>
              </div>
            </div>
            
            <div className="estimator-result-item">
              <h4>Duration Simulation</h4>
              <div className="estimator-time">
                {estimate.weeks} <span style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Weeks Total</span>
              </div>
            </div>

            <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="estimator-cta-btn">
              Secure This Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. Testimonials Slider Component
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const reviews = [
    {
      id: 1,
      quote: "Working with Aether Studio completely transformed our online presence. Their component architecture is immaculate, and their design thinking is spectacular. Our digital inquiries surged by 55% within just two months of launching.",
      name: "Sarah Jenkins",
      role: "Chief Executive at TechVanguard"
    },
    {
      id: 2,
      quote: "The modular Web3 interface system they generated runs seamlessly. Their team's razor-sharp focus on details, rapid integration support, and exquisite structural design made this massive product rollout a massive success.",
      name: "Marcus Chen",
      role: "Technology Director at Decentral Labs"
    },
    {
      id: 3,
      quote: "Aether didn't just build a typical agency brochure; they sculpted an immersive digital showcase. Their premium custom styles and React mastery are second to none in the modern design industry.",
      name: "Elena Rostova",
      role: "VP of Product at Elevate Slate"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[activeIndex];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-slider glass-panel">
          <div className="testimonial-card">
            <svg className="quote-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h3c0 4-2 6-5 7v3Zm12 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h3c0 4-2 6-5 7v3Z"/></svg>
            
            <div className="testimonial-rating">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>

            <p className="testimonial-text">
              "{current.quote}"
            </p>

            <div className="testimonial-author">
              <span className="author-name">{current.name}</span>
              <span className="author-role">{current.role}</span>
            </div>
          </div>
          
          <div className="slider-controls">
            <button className="slider-arrow" onClick={handlePrev} aria-label="Previous Testimonial" id="testimonial-prev-btn">
              <ChevronLeftIcon />
            </button>
            <button className="slider-arrow" onClick={handleNext} aria-label="Next Testimonial" id="testimonial-next-btn">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Validated Contact Form Component
const ContactForm = ({ addToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject selection is required.";
    if (!formData.message.trim()) tempErrors.message = "Message details are required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Dynamically wipe validation errors
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      
      // Simulate API submit delay
      setTimeout(() => {
        setSubmitting(false);
        addToast(`Thank you, ${formData.name}! Your request has been secured. Our designers will email you within 12 hours.`, 'success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    } else {
      addToast('Please correct validation errors first.', 'info');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <div className="badge">Contact</div>
          <h3>Let's Construct Something Iconic</h3>
          <p>
            Whether you want a high-end branding kit, futuristic React engineering, or interactive custom web applications, we are equipped to bring your roadmap to life.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <MailIcon />
              </div>
              <div className="contact-text">
                <h4>Digital Inbox</h4>
                <p>hello@aetherstudio.design</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <PhoneIcon />
              </div>
              <div className="contact-text">
                <h4>Hotline Secure</h4>
                <p>+1 (555) 739-0129</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPinIcon />
              </div>
              <div className="contact-text">
                <h4>Physical Headquarter</h4>
                <p>Suite 900, Metasphere Labs, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel glass-panel">
          <form onSubmit={handleFormSubmit} id="contact-agency-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="form-name">Your Full Name</label>
                <input 
                  type="text" 
                  id="form-name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="form-email">Your Work Email</label>
                <input 
                  type="email" 
                  id="form-email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. john@company.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="form-subject">Project Primary Goal</label>
                <select 
                  id="form-subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  style={{ color: formData.subject === '' ? 'var(--text-muted)' : 'var(--text-primary)' }}
                >
                  <option value="" disabled>Select project category...</option>
                  <option value="brand">Strategy & Branding Design</option>
                  <option value="web">Full React Web App Development</option>
                  <option value="web3">Web3 & Holographic Solutions</option>
                  <option value="other">General Consulting / Enterprise Strategy</option>
                </select>
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="form-message">Brief Details & Scope</label>
                <textarea 
                  id="form-message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your creative roadmap and timeline expectations..."
                  className={`form-input ${errors.message ? 'error' : ''}`}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={submitting}
              id="form-submit-btn"
            >
              {submitting ? 'Transmitting Request...' : (
                <React.Fragment>
                  Transmit Message & Get Started <SendIcon />
                </React.Fragment>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// 8. Footer Component
const Footer = ({ addToast }) => {
  const [email, setEmail] = useState('');
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      addToast('Please input a valid email.', 'info');
      return;
    }
    addToast('Success! You are now subscribed to Aether Insights.', 'success');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              AETHER<span className="logo-dot"></span>
            </a>
            <p>Sculpting brand identities, React architectures, and high-performance Web3 solutions.</p>
          </div>
          
          <div className="footer-col">
            <h4>Studio</h4>
            <ul className="footer-links">
              <li><a href="#home">Home Base</a></li>
              <li><a href="#services">Our Focus</a></li>
              <li><a href="#portfolio">Masterpieces</a></li>
              <li><a href="#estimator">Cost Calculator</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legals</h4>
            <ul className="footer-links">
              <li><a href="#home">Terms of Deal</a></li>
              <li><a href="#home">Privacy Systems</a></li>
              <li><a href="#home">Security Policy</a></li>
              <li><a href="#home">Disclaimers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Aether Dispatch</h4>
            <p className="newsletter-text">Join our subscriber chain for premium insight articles on UI and React engineering.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Secure email..." 
                className="form-input" 
                id="newsletter-email-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe to newsletter" id="newsletter-submit-btn">
                <SendIcon />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aether Studio. All digital rights reserved. Crafted in React.</p>
          
          <div className="footer-socials">
            <a href="#home" className="social-link" aria-label="X Profile" id="social-x-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a href="#home" className="social-link" aria-label="LinkedIn Profile" id="social-linkedin-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#home" className="social-link" aria-label="GitHub Profile" id="social-github-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 9. Root App Component
const App = () => {
  const [theme, setTheme] = useState('dark');
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Write dark/light attribute directly to HTML root
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    
    // Automatically fade out toasts in 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  return (
    <React.Fragment>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <CreativeEstimator addToast={addToast} />
        <Testimonials />
        <ContactForm addToast={addToast} />
      </main>
      <Footer addToast={addToast} />

      {/* Dynamic Notifications System */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast ${toast.type} glass-panel`}>
            <div className="toast-icon">
              {toast.type === 'success' ? <CheckIcon /> : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ stroke: 'var(--accent-purple)' }}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
              )}
            </div>
            <div className="toast-message">{toast.message}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

// Mount the App in target DOM Node
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// --- Modular Estimator Math Engine ---
// Factorized pricing scale index calculation for clean multiplier increments
