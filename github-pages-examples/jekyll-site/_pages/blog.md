---
layout: default
title: Blog
permalink: /blog/
---

# Blog Posts

Welcome to the blog section! Here you'll find articles about web development, GitHub Pages, and Jekyll.

<div class="post-list">
  {% for post in site.posts %}
    <article class="post-preview">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      <p class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%B %d, %Y" }}
        </time>
        {% if post.author %} • {{ post.author }}{% endif %}
      </p>
      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </article>
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
<p>No posts yet. Check back soon!</p>
{% endif %}

## Writing Blog Posts

To create a new blog post:

1. Create a new file in the `_posts` directory
2. Name it using the format: `YYYY-MM-DD-title.md`
3. Add front matter with title, date, and author
4. Write your content in Markdown

### Example Post Front Matter:

```yaml
---
layout: post
title: "My First Blog Post"
date: 2025-01-15 10:00:00 -0300
author: "Your Name"
categories: [jekyll, github-pages]
tags: [tutorial, getting-started]
---
```

<style>
.post-list {
  margin: 20px 0;
}

.post-preview {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e4e8;
}

.post-preview:last-child {
  border-bottom: none;
}

.post-preview h2 {
  margin-bottom: 10px;
}

.post-preview h2 a {
  text-decoration: none;
  color: #24292e;
}

.post-preview h2 a:hover {
  color: #0366d6;
}

.post-meta {
  color: #586069;
  font-size: 14px;
  margin-bottom: 15px;
}

.post-excerpt {
  margin-bottom: 15px;
  color: #24292e;
}

.read-more {
  color: #0366d6;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}
</style>