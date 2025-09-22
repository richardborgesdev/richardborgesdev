---
layout: project
title: "Portfolio Website"
description: "A responsive portfolio website built with Jekyll and hosted on GitHub Pages"
technologies: ["Jekyll", "Sass", "JavaScript", "GitHub Pages"]
github_url: "https://github.com/richardborgesdev/portfolio"
demo_url: "https://richardborgesdev.github.io/portfolio"
---

# Portfolio Website

This project demonstrates how to create a professional portfolio website using Jekyll and GitHub Pages. The site features a responsive design, smooth animations, and a clean, modern layout.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Loading**: Static site generation ensures quick page loads
- **SEO Optimized**: Built-in SEO features with Jekyll plugins
- **Easy to Maintain**: Content managed through Markdown files
- **Free Hosting**: Hosted on GitHub Pages at no cost

## Technical Implementation

### Jekyll Configuration

The site uses Jekyll's powerful templating system with Liquid to create reusable components:

```yaml
# _config.yml
title: "Richard Borges - Developer"
description: "Full-stack developer passionate about creating amazing web experiences"
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```

### Responsive Sass Styling

Custom Sass styles provide a responsive grid system and modern design:

```scss
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
```

### GitHub Pages Deployment

The site automatically deploys when changes are pushed to the main branch:

1. Push changes to GitHub repository
2. GitHub Actions builds the Jekyll site
3. Site is published to GitHub Pages
4. Available at custom domain or github.io URL

## Getting Started

To create your own portfolio:

1. Fork this repository
2. Customize `_config.yml` with your information
3. Add your projects to the `_projects` collection
4. Update the about page with your background
5. Push to GitHub and enable GitHub Pages

This approach provides a professional online presence while learning modern web development tools and practices.