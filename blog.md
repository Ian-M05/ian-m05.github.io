---
layout: page
title: Blog
permalink: /blog/
---

<section class="section">
  <div class="wrapper">
    <div class="section-title">
      <h1 class="fade-in">Blog</h1>
      <p>Thoughts, insights, and updates from my journey in AI and Computer Science</p>
    </div>
    
    <div class="blog-search">
      <form class="blog-search-form">
        <input type="text" class="blog-search-input" placeholder="Search articles...">
        <button type="submit" class="blog-search-button">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
    
    <div class="blog-grid">
      {% for post in site.posts %}
      <div class="blog-card card fade-in-up" style="animation-delay: {{ forloop.index | times: 0.2 }}s;">
        <span class="blog-date">{{ post.date | date: "%B %-d, %Y" }}</span>
        <div class="blog-card-content">
          <h2 class="blog-title">{{ post.title }}</h2>
          <div class="skill-container">
            {% for tag in post.tags limit:3 %}
            <span class="skill-tag">{{ tag }}</span>
            {% endfor %}
          </div>
          <p class="blog-excerpt">{{ post.excerpt | strip_html | truncatewords: 35 }}</p>
          <div class="blog-card-footer">
            <span class="blog-author">{{ post.author | default: site.author }}</span>
            <a href="{{ post.url }}" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      {% endfor %}
      
      {% if site.posts.size == 0 %}
      <div class="no-posts-message text-center">
        <h3>No posts found</h3>
        <p>Check back soon for new content!</p>
      </div>
      {% endif %}
    </div>
    
    {%- if paginator.total_pages > 1 -%}
    <div class="blog-pagination">
      {%- if paginator.previous_page -%}
      <a href="{{ paginator.previous_page_path }}" class="btn btn-outline">
        <i class="fas fa-chevron-left"></i> Previous
      </a>
      {%- else -%}
      <span class="btn btn-outline disabled">
        <i class="fas fa-chevron-left"></i> Previous
      </span>
      {%- endif -%}
      
      <span class="pagination-current">{{ paginator.page }}</span>
      
      {%- if paginator.next_page -%}
      <a href="{{ paginator.next_page_path }}" class="btn btn-outline">
        Next <i class="fas fa-chevron-right"></i>
      </a>
      {%- else -%}
      <span class="btn btn-outline disabled">
        Next <i class="fas fa-chevron-right"></i>
      </span>
      {%- endif -%}
    </div>
    {%- endif -%}
  </div>
</section>
