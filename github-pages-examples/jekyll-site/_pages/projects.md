---
layout: default
title: Projects
permalink: /projects/
---

# Projects

Here are some example projects to demonstrate Jekyll collections and project showcases.

<div class="project-grid">
  {% for project in site.projects %}
    <div class="project-card">
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      <p>{{ project.description }}</p>
      {% if project.technologies %}
        <div class="technologies">
          {% for tech in project.technologies %}
            <span class="tech-tag">{{ tech }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

## Creating Your Own Projects

To add a new project:

1. Create a new file in the `_projects` directory
2. Add front matter with title, description, and technologies
3. Write your project content in Markdown
4. Include links to GitHub repository and live demo

### Example Project Front Matter:

```yaml
---
layout: project
title: "My Awesome Project"
description: "A brief description of what this project does"
technologies: ["React", "Node.js", "MongoDB"]
github_url: "https://github.com/username/project"
demo_url: "https://project-demo.com"
---
```

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.project-card {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 20px;
  background: #fff;
}

.project-card h3 {
  margin-top: 0;
}

.project-card h3 a {
  text-decoration: none;
  color: #0366d6;
}

.project-card h3 a:hover {
  text-decoration: underline;
}

.technologies {
  margin-top: 10px;
}

.tech-tag {
  display: inline-block;
  background: #f1f8ff;
  color: #0366d6;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>