---
layout: page
title: Projects
permalink: /projects/
---

<section class="section bg-manilla">
  <div class="wrapper">
    <div class="section-title">
      <h1 class="fade-in">My Projects</h1>
      <p>A showcase of my work in AI, Data Engineering, and Systems Automation</p>
    </div>
    
    <div class="projects-grid">
      <!-- F.R.E.D. -->
      <div class="project-card fade-in-up" id="fred">
        <div class="project-icon-box">
          <i class="fas fa-project-diagram"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Flagship Project</span>
          <h2 class="project-title">F.R.E.D. — Local-first Intelligent Data System</h2>
          <p class="project-description">A creator-built architecture focusing on data integrity, deterministic outputs, and efficient edge computing processing.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li><strong>Data Integrity:</strong> Engineered a strict JSON schema validation system for deterministic model outputs.</li>
              <li><strong>Persistent Storage:</strong> Built an L2 data store using DuckDB for efficient querying of historical context.</li>
              <li><strong>Knowledge Graph:</strong> Developed an L3 knowledge graph to map complex relationships between data points.</li>
              <li><strong>Real-Time Monitoring:</strong> Built a live dashboard with bidirectional communication via Flask-SocketIO.</li>
              <li><strong>Edge Computing:</strong> Deployed a wearable interface on a Raspberry Pi using WebRTC for field-relevant operations.</li>
              <li><strong>Resource Optimization:</strong> Centralized Ollama model manager for pooling, streaming, and vision-agent chains.</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">Python</span>
            <span class="project-tag">DuckDB</span>
            <span class="project-tag">Flask-SocketIO</span>
            <span class="project-tag">Ollama API</span>
            <span class="project-tag">WebRTC</span>
          </div>
          
          <div class="project-links">
            <a href="https://github.com/Ian-M05/FRED-V2" target="_blank" class="btn btn-primary">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- CoStar Group -->
      <div class="project-card fade-in-up" id="costar" style="animation-delay: 0.2s;">
        <div class="project-icon-box">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Capstone Project</span>
          <h2 class="project-title">CoStar Group Enterprise AI</h2>
          <p class="project-description">Collaboration with an Agile team to develop a scalable enterprise AI solution, focusing on business process optimization.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Operating in bi-weekly sprints to translate business needs into technical specifications.</li>
              <li>Owned data pipeline automation, reducing manual data entry requirements.</li>
              <li>Integrated LLM model endpoints into existing business workflows.</li>
              <li>Implemented rigorous testing and validation procedures for model accuracy.</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">Agile</span>
            <span class="project-tag">Data Automation</span>
            <span class="project-tag">Enterprise AI</span>
            <span class="project-tag">Python</span>
          </div>
          
          <div class="project-links">
            <a href="/about" class="btn btn-primary">
              <i class="fas fa-info-circle"></i> Project Details
            </a>
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
          <h2 class="project-title">RoBERTa Emotion Classifier</h2>
          <p class="project-description">Fine-tuned NLP model designed to accurately classify text into emotional categories with high precision.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Fine-tuned RoBERTa on tweet_eval/emotion with PyTorch (~81.5% F1 score).</li>
              <li>Demonstrated end-to-end model development from data selection to evaluation.</li>
              <li>Optimized training hyper-parameters for peak performance on small-scale datasets.</li>
              <li>Implemented advanced text preprocessing to handle noise in social media data.</li>
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
    </div>
  </div>
</section>

<section class="section bg-light">
  <div class="wrapper">
    <div class="section-title">
      <h2>More Projects on GitHub</h2>
      <p>I'm constantly building and experimenting with new technologies.</p>
    </div>
    
    <div class="text-center">
      <a href="https://github.com/Ian-M05" target="_blank" class="btn btn-primary">
        <i class="fab fa-github"></i> Follow Me @Ian-M05
      </a>
    </div>
  </div>
</section>
