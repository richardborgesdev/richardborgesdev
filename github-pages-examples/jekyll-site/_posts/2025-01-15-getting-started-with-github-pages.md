---
layout: post
title: "Getting Started with GitHub Pages"
date: 2025-01-15 10:00:00 -0300
categories: [tutorial, github-pages]
tags: [github, static-site, web-development]
author: "Richard Borges"
excerpt: "Learn how to create and deploy your first GitHub Pages site with this comprehensive guide."
---

# Getting Started with GitHub Pages

GitHub Pages is a fantastic way to host static websites directly from your GitHub repositories. Whether you're showcasing a portfolio, documenting a project, or creating a blog, GitHub Pages provides a free and reliable hosting solution.

## What is GitHub Pages?

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.

### Key Features

- **Free hosting** for public repositories
- **Custom domains** support
- **HTTPS by default** for security
- **Jekyll integration** for static site generation
- **GitHub Actions** for custom workflows

## Setting Up Your First Site

### Method 1: Simple HTML Files

1. Create a new repository or use an existing one
2. Add an `index.html` file to your repository
3. Go to repository Settings → Pages
4. Select your source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

```html
<!DOCTYPE html>
<html>
<head>
    <title>My GitHub Pages Site</title>
</head>
<body>
    <h1>Hello, GitHub Pages!</h1>
    <p>This is my first GitHub Pages site.</p>
</body>
</html>
```

### Method 2: Using Jekyll

Jekyll is a static site generator that's built into GitHub Pages. It allows you to:

- Write content in Markdown
- Use layouts and includes for consistent design
- Leverage plugins for extended functionality
- Manage blog posts with front matter

```yaml
---
layout: default
title: "My Page"
---

# Welcome to My Site

This content is written in **Markdown** and will be converted to HTML by Jekyll.
```

## Best Practices

### 1. Repository Structure

Keep your repository organized:

```
my-site/
├── _config.yml          # Jekyll configuration
├── index.html           # Homepage
├── about.md            # About page
├── _posts/             # Blog posts
├── _layouts/           # Page templates
├── _includes/          # Reusable components
├── assets/             # CSS, JS, images
└── README.md           # Project documentation
```

### 2. SEO Optimization

```yaml
# In your _config.yml
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap

title: "Your Site Title"
description: "A brief description of your site"
url: "https://yourusername.github.io"
```

### 3. Performance

- Optimize images before uploading
- Minify CSS and JavaScript
- Use a CDN for external libraries
- Enable GitHub Pages' built-in caching

## Common Use Cases

### Portfolio Website

Perfect for showcasing your projects and skills:

```markdown
---
layout: project
title: "My Awesome Project"
technologies: [React, Node.js, MongoDB]
github_url: "https://github.com/username/project"
demo_url: "https://project-demo.com"
---

This project demonstrates my full-stack development skills...
```

### Documentation Site

Great for project documentation:

```markdown
---
layout: docs
title: "API Reference"
category: "documentation"
---

## Authentication

All API requests require authentication...
```

### Blog

Share your thoughts and experiences:

```markdown
---
layout: post
title: "My Journey Learning Web Development"
date: 2025-01-15
categories: [learning, web-development]
---

Today I want to share my experience learning web development...
```

## Advanced Features

### Custom Domains

1. Add a `CNAME` file to your repository root
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in repository settings

### GitHub Actions

Create custom build processes:

```yaml
name: Build and Deploy
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Troubleshooting

### Common Issues

1. **404 errors**: Check your file paths and case sensitivity
2. **Slow updates**: GitHub Pages can take a few minutes to update
3. **Jekyll build failures**: Check your `_config.yml` syntax
4. **Custom domain issues**: Verify DNS configuration

### Debugging Tips

- Check the Pages settings in your repository
- Review build logs in the Actions tab
- Test locally with Jekyll serve
- Validate your HTML and CSS

## Conclusion

GitHub Pages is an excellent platform for hosting static websites. With its seamless GitHub integration, Jekyll support, and custom domain capabilities, it's perfect for developers looking to showcase their work or share knowledge through blogs and documentation.

Start with a simple HTML file and gradually explore more advanced features like Jekyll themes, plugins, and GitHub Actions workflows. The combination of version control and web hosting makes GitHub Pages a powerful tool in any developer's toolkit.

---

*Have questions about GitHub Pages? Feel free to reach out or check the [official documentation](https://docs.github.com/en/pages).*