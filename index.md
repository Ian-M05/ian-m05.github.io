---
layout: home
---

<section class="hero-section">
  <div class="hero-background"></div>
  <div class="wrapper">
    <div class="hero-content fade-in">
      <h1 class="hero-title">Hi, I'm <span>Ian Mullins</span></h1>
      <p class="hero-subtitle">Computer Science student specializing in Artificial Intelligence</p>
      <div class="hero-cta">
        <a href="/projects" class="btn btn-secondary btn-icon">
          <i class="fas fa-code"></i> View My Projects
        </a>
        <a href="/contact" class="btn btn-outline btn-icon">
          <i class="fas fa-paper-plane"></i> Contact Me
        </a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <div class="section-title">
      <h2>My Expertise</h2>
      <p>Areas where I excel and continue to grow</p>
    </div>
    
    <div class="three-column-grid">
      <div class="feature-card fade-in-up">
        <div class="feature-card-header">
          <i class="fas fa-robot"></i>
        </div>
        <div class="feature-card-body">
          <h3>AI & Machine Learning</h3>
          <p>Experienced with Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and prompt engineering techniques.</p>
        </div>
      </div>
      
      <div class="feature-card fade-in-up" style="animation-delay: 0.2s;">
        <div class="feature-card-header">
          <i class="fas fa-code"></i>
        </div>
        <div class="feature-card-body">
          <h3>Software Development</h3>
          <p>Proficient in Python, Java, and C programming with a focus on creating efficient and maintainable code.</p>
        </div>
      </div>
      
      <div class="feature-card fade-in-up" style="animation-delay: 0.4s;">
        <div class="feature-card-header">
          <i class="fas fa-terminal"></i>
        </div>
        <div class="feature-card-body">
          <h3>System Design</h3>
          <p>Skilled in designing robust and scalable systems with an emphasis on performance optimization and user experience.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-light">
  <div class="wrapper">
    <div class="section-title">
      <h2>Featured Projects</h2>
      <p>A selection of my recent work</p>
    </div>
    
    <div class="projects-grid">
      <div class="project-card fade-in-up">
        <div class="card-header">
          <div class="card-icon">
            <i class="fas fa-robot"></i>
          </div>
          <h3>AI Assistant</h3>
        </div>
        <div class="card-body">
          <p>A personal AI assistant built with Python that leverages LLMs for natural language understanding and task automation.</p>
          <a href="/projects#ai-assistant" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      
      <div class="project-card fade-in-up" style="animation-delay: 0.2s;">
        <div class="card-header">
          <div class="card-icon">
            <i class="fas fa-laptop"></i>
          </div>
          <h3>Portfolio Website</h3>
        </div>
        <div class="card-body">
          <p>A modern, responsive portfolio website built with Jekyll and custom CSS to showcase my projects and skills.</p>
          <a href="/projects#portfolio-website" class="btn btn-primary">Learn More</a>
        </div>
      </div>

      <div class="project-card fade-in-up" style="animation-delay: 0.4s;">
        <div class="card-header">
          <div class="card-icon">
            <i class="fas fa-heart"></i>
          </div>
          <h3>RoBERTa Emotion Detection</h3>
        </div>
        <div class="card-body">
          <p>Fine-tuned RoBERTa model for emotion classification with 81.5% accuracy across 6 emotional categories.</p>
          <a href="/projects#roberta-emotion" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
    
    <div class="section-cta">
      <a href="/projects" class="btn btn-primary btn-icon">
        <i class="fas fa-briefcase"></i> View All Projects
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <div class="section-title">
      <h2>Education</h2>
      <p>My academic journey</p>
    </div>
    
    <div class="card fade-in-up">
      <div class="card-header">
        <div class="card-icon">
          <i class="fas fa-university"></i>
        </div>
        <h3>Virginia Commonwealth University</h3>
        <div class="card-date">2023 - 2027</div>
      </div>
      
      <div class="card-body">
        <div class="education-info">
          <h4>Bachelor of Science, Computer Science</h4>
          <p>Minor in Artificial Intelligence</p>
        </div>
        
        <div class="education-stats">
          <div class="stat-item">
            <h5>GPA</h5>
            <p>3.9</p>
          </div>
          <div class="stat-item">
            <h5>Major GPA</h5>
            <p>4.0</p>
          </div>
        </div>
        
        <div class="coursework">
          <h4><i class="fas fa-book"></i> Key Coursework</h4>
          <div class="skill-container">
            <span class="skill-tag">Calculus 2</span>
            <span class="skill-tag">Data Structures & OOP</span>
            <span class="skill-tag">Computer Systems</span>
            <span class="skill-tag">Computer Organization</span>
            <span class="skill-tag">Software Engineering</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-light">
  <div class="wrapper">
    <div class="section-title">
      <h2>Contact Information</h2>
      <p>Let's connect</p>
    </div>
    
    <div class="contact-info-container">
      <div class="card fade-in-up">
        <div class="card-header">
          <div class="card-icon">
            <i class="fas fa-address-card"></i>
          </div>
          <h3>Ways to Reach Me</h3>
        </div>
        
        <ul class="contact-list">
          <li>
            <div class="contact-item">
              <div class="contact-icon-circle">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-text">
                <h4>Email</h4>
                <a href="mailto:{{ site.email }}">{{ site.email }}</a>
              </div>
            </div>
          </li>
          <li>
            <div class="contact-item">
              <div class="contact-icon-circle">
                <i class="fab fa-github"></i>
              </div>
              <div class="contact-text">
                <h4>GitHub</h4>
                <a href="https://github.com/{{ site.github_username }}" target="_blank">github.com/{{ site.github_username }}</a>
              </div>
            </div>
          </li>
          <li>
            <div class="contact-item">
              <div class="contact-icon-circle">
                <i class="fab fa-linkedin"></i>
              </div>
              <div class="contact-text">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" target="_blank">linkedin.com/in/{{ site.linkedin_username }}</a>
              </div>
            </div>
          </li>
          <li>
            <div class="contact-item">
              <div class="contact-icon-circle">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-text">
                <h4>Location</h4>
                <p>Mechanicsville, VA</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <div class="ai-note card text-center">
      <div class="card-header">
        <div class="card-icon">
          <i class="fas fa-robot"></i>
        </div>
        <h3>Built with AI</h3>
      </div>
      <div class="card-body">
        <p>This website was designed and built through iterative refinement and prompt engineering using Claude 3.7 Sonnet from Anthropic.</p>
      </div>
    </div>
  </div>
</section>
