---
layout: page
title: Projects
permalink: /projects/
---

<section class="section">
  <div class="wrapper">
    <div class="section-title">
      <h1 class="fade-in">Technical Portfolio</h1>
      <p>Showcasing expertise in AI Architecture, Systems Engineering, and Data Strategy</p>
    </div>
    
    <div class="projects-grid">
      <!-- F.R.E.D. V2 -->
      <div class="project-card fade-in-up" id="fred-v2">
        <div class="project-icon-box">
          <i class="fas fa-brain"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Flagship Project</span>
          <h2 class="project-title">F.R.E.D. - Integrated Intelligent System Architecture</h2>
          <p class="project-description">A creator-architected intelligent system designed for high-availability routing, schema compliance, and real-time inference optimization on constrained platforms.</p>
          
          <div class="project-features">
            <h4>System Architecture & Data Strategy:</h4>
            <ul class="feature-list">
              <li>Defined Data Flow Architectures to enforce schema compliance between asynchronous subsystems; ensured data integrity and deterministic outputs.</li>
              <li>Architected a high-availability routing subsystem implementing automatic retry logic and exponential backoff.</li>
              <li>Developed a test matrix to validate inference latency requirements (<200ms) under heavy data load.</li>
              <li>Led integration of local LLMs on constrained platforms (Raspberry Pi), managing memory overhead and security protocols.</li>
              <li>Performed Trade Studies on compute architectures to optimize SWaP (Size, Weight, and Power) for edge deployment.</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">Python</span>
            <span class="project-tag">LLMs</span>
            <span class="project-tag">Systems Engineering</span>
            <span class="project-tag">V-Model</span>
            <span class="project-tag">Edge AI</span>
          </div>
          
          <div class="project-links">
            <a href="https://github.com/Ian-M05/FRED-V2" target="_blank" class="btn btn-primary">
              <i class="fab fa-github"></i> View F.R.E.D. V2
            </a>
          </div>
        </div>
      </div>

      <!-- CoStar Group -->
      <div class="project-card fade-in-up" id="costar" style="animation-delay: 0.2s;">
        <div class="project-icon-box">
          <i class="fas fa-building"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Capstone Project (2025-Present)</span>
          <h2 class="project-title">CoStar Group AI Collaboration</h2>
          <p class="project-description">Technical Point of Contact facilitating requirements flow-down and stakeholder alignment for scalable AI architectures.</p>
          
          <div class="project-features">
            <h4>Key Contributions:</h4>
            <ul class="feature-list">
              <li>Acting as Technical Point of Contact between stakeholders and development team.</li>
              <li>Conducted Stakeholder Requirements Definition to translate business needs into technical specifications.</li>
              <li>Ensuring alignment with business goals for scalable AI architecture deployment.</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">Stakeholder Management</span>
            <span class="project-tag">AI Architecture</span>
            <span class="project-tag">Requirements Engineering</span>
          </div>
        </div>
      </div>
      
      <!-- RoBERTa Emotion Detection -->
      <div class="project-card fade-in-up" id="roberta-emotion" style="animation-delay: 0.4s;">
        <div class="project-icon-box">
          <i class="fas fa-heart"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Machine Learning</span>
          <h2 class="project-title">RoBERTa Emotion Detection</h2>
          <p class="project-description">Fine-tuned RoBERTa on tweet_eval/emotion with PyTorch + HF Transformers; ~81.5% macro-F1 across 4 classes.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Fine-tuned RoBERTa on tweet_eval/emotion with PyTorch + HF Transformers.</li>
              <li>Integrated into a chatbot for empathetic responses.</li>
              <li>Optimized system performance with GPU acceleration and efficient text preprocessing.</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">PyTorch</span>
            <span class="project-tag">Hugging Face</span>
            <span class="project-tag">NLP</span>
            <span class="project-tag">Fine-Tuning</span>
          </div>
          
          <div class="project-links">
            <a href="https://huggingface.co/RFlash/emotion-detector" target="_blank" class="btn btn-primary">
              <i class="fas fa-brain"></i> View on Hugging Face
            </a>
          </div>
        </div>
      </div>

      <!-- IT Internship -->
      <div class="project-card fade-in-up" id="tmg-internship" style="animation-delay: 0.6s;">
        <div class="project-icon-box">
          <i class="fas fa-network-wired"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Work Experience</span>
          <h2 class="project-title">IT Intern - TMG/Dominion Management</h2>
          <p class="project-description">Standardized Mac onboarding and managed enterprise access controls.</p>
          
          <div class="project-features">
            <h4>Key Accomplishments:</h4>
            <ul class="feature-list">
              <li>Standardized Mac onboarding with Intune runbooks.</li>
              <li>Managed access controls and resolved HW/SW/network tickets.</li>
              <li>Reduced day-one blockers and improved user productivity through automated workflows.</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">Intune</span>
            <span class="project-tag">Mac Management</span>
            <span class="project-tag">Access Control</span>
            <span class="project-tag">IT Operations</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-light">
  <div class="wrapper">
    <div class="section-title">
      <h2>Technical Background</h2>
      <p>Structured approach to systems and risk management</p>
    </div>
    
    <div class="three-column-grid">
      <div class="card">
        <h3>Systems Engineering</h3>
        <ul class="feature-list">
          <li>Structured outputs & Tool Calling</li>
          <li>Knowledge Graphs & Semantic Search</li>
          <li>V-Model Lifecycle & V&V Procedures</li>
          <li>Risk Management & Root Cause Analysis</li>
        </ul>
      </div>
      
      <div class="card">
        <h3>AI/ML Stack</h3>
        <ul class="feature-list">
          <li>Multi-Agent Systems</li>
          <li>Transformers & Fine-tuning</li>
          <li>Vector DBs (DuckDB, etc.)</li>
          <li>FastAPI & Flask Integration</li>
        </ul>
      </div>
      
      <div class="card">
        <h3>Tools & Protocols</h3>
        <ul class="feature-list">
          <li>WebRTC (aiortc)</li>
          <li>STT/TTS (Vosk, Coqui)</li>
          <li>Ollama Inference</li>
          <li>Linux (RHEL/Ubuntu)</li>
        </ul>
      </div>
    </div>
    
    <div class="text-center mt-5">
      <a href="https://github.com/Ian-M05" target="_blank" class="btn btn-primary">
        <i class="fab fa-github"></i> Follow Me on GitHub
      </a>
    </div>
  </div>
</section>
