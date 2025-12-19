---
layout: page
title: Projects
permalink: /projects/
---

<section class="section">
  <div class="wrapper">
    <div class="section-title">
      <h1 class="fade-in">My Projects</h1>
      <p>A showcase of my work in AI, software development, and more</p>
    </div>
    
    <div class="projects-grid">
      <!-- AI Assistant -->
      <div class="project-card fade-in-up" id="ai-assistant">
        <div class="project-icon-box">
          <i class="fas fa-robot"></i>
        </div>
        <div class="project-content">
          <span class="project-category">AI Development</span>
          <h2 class="project-title">LLM Personal Assistant with RAG</h2>
          <p class="project-description">A personal AI assistant built with Python that leverages large language models for natural language understanding and task automation, enhanced with sophisticated memory and contextual awareness systems.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Built on Qwen 2.5:14b Model using Ollama API</li>
              <li>Implemented Retrieval-Augmented Generation (RAG) and a custom relational database to store memory-based JSON objects for context-aware responses</li>
              <li>Optimized query execution by integrating prompt chaining workflows, improving response accuracy and reducing size of "memories" stored by 50%</li>
              <li>Implemented embedding caching for memory objects increasing processing speed significantly</li>
              <li>Developed dynamic memory management system which consolidates recently accessed memory objects based on semantic similarity using cosine similarity function drastically reducing redundancy in JSON database</li>
              <li>Utilized prompt chaining techniques to drastically increase digestibility of complex prompts for smaller models, significantly increasing response accuracy</li>
              <li>Crafted complex system prompt to urge model to utilize features such as: chain-of-thought, alignment tuning, and "curiosity"</li>
              <li>Designated "Memory Management" language model designated to crafting unique memories utilizing zero-shot prompting</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">Python</span>
            <span class="project-tag">LLMs</span>
            <span class="project-tag">RAG</span>
            <span class="project-tag">Ollama API</span>
            <span class="project-tag">SQLite</span>
          </div>
          
          <div class="project-links">
            <a href="https://github.com/RFlash007/F.R.E.D." target="_blank" class="btn btn-primary">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>
      
      <!-- Portfolio Website -->
      <div class="project-card fade-in-up" id="portfolio-website" style="animation-delay: 0.2s;">
        <div class="project-icon-box">
          <i class="fas fa-laptop"></i>
        </div>
        <div class="project-content">
          <span class="project-category">Web Development</span>
          <h2 class="project-title">Portfolio Website Development</h2>
          <p class="project-description">A responsive portfolio website built using iterative refinement and prompt engineering techniques with Claude 3.7 Sonnet, showcasing advanced AI-assisted development methodologies.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Developed a fully functional portfolio website using iterative refinement and prompt engineering techniques with Claude 3.7 Sonnet</li>
              <li>Optimized AI-driven workflows to refine code, design, and content, demonstrating advanced LLM utilization and prompt engineering skills</li>
              <li>Showcased expertise in AI-assisted development and efficient iteration cycles without traditional manual coding</li>
              <li>Responsive design that works seamlessly across all devices</li>
              <li>Modern UI with smooth animations and transitions</li>
              <li>Optimized performance and accessibility</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">Jekyll</span>
            <span class="project-tag">HTML/CSS</span>
            <span class="project-tag">JavaScript</span>
            <span class="project-tag">Prompt Engineering</span>
            <span class="project-tag">AI-Assisted Development</span>
          </div>
          
          <div class="project-links">
            <a href="https://github.com/RFlash007/RFlash007.github.io" target="_blank" class="btn btn-primary">
              <i class="fab fa-github"></i> View on GitHub
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
          <h2 class="project-title">RoBERTa Emotion Detection</h2>
          <p class="project-description">A sophisticated emotion detection system using RoBERTa model fine-tuned on the tweet_eval/emotion dataset, designed to accurately classify text into different emotional categories for context-aware applications.</p>
          
          <div class="project-features">
            <h4>Key Features:</h4>
            <ul class="feature-list">
              <li>Developed an emotion detection system using RoBERTa model fine-tuned on tweet_eval/emotion dataset</li>
              <li>Implemented text classification pipeline for detecting anger, joy, optimism, and sadness with 81.5% accuracy</li>
              <li>Designed model training workflow with hyperparameter optimization and evaluation metrics (accuracy, F1 score)</li>
              <li>Integrated emotion detection with chatbot system to enable context-aware, empathetic responses</li>
              <li>Built end-to-end solution including model training, evaluation, and deployment capabilities</li>
              <li>Optimized system performance with GPU acceleration and efficient text preprocessing</li>
            </ul>
          </div>
          
          <div class="project-tags">
            <span class="project-tag">PyTorch</span>
            <span class="project-tag">Hugging Face</span>
            <span class="project-tag">RoBERTa</span>
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
      <h2>More Projects Coming Soon</h2>
      <p>I'm constantly working on new projects. Check back later for updates!</p>
    </div>
    
    <div class="text-center">
      <a href="https://github.com/RFlash007" target="_blank" class="btn btn-primary">
        <i class="fab fa-github"></i> Follow Me on GitHub
      </a>
    </div>
  </div>
</section>
