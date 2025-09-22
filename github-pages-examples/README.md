# GitHub Pages Examples 🚀

A comprehensive collection of GitHub Pages examples demonstrating different approaches to building and deploying static websites. This repository showcases basic HTML sites, Jekyll-powered blogs, and custom build processes using modern web development tools.

## 📁 Repository Structure

```
github-pages-examples/
├── basic-site/          # Simple HTML/CSS/JS example
├── jekyll-site/         # Jekyll static site generator example  
├── custom-actions/      # Custom build process with Webpack
└── README.md           # This documentation
```

## 🎯 Examples Overview

### 1. Basic Site (`basic-site/`)

A simple, static website using only HTML, CSS, and JavaScript. Perfect for:
- Personal portfolios
- Landing pages
- Simple documentation sites
- Learning the basics of GitHub Pages

**Features:**
- Responsive design
- Modern CSS Grid and Flexbox
- Vanilla JavaScript interactions
- Progressive Web App features
- Direct deployment to GitHub Pages

**🚀 Quick Start:**
1. Fork this repository
2. Enable GitHub Pages in Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: `main` and folder: `/github-pages-examples/basic-site`
5. Your site will be available at `https://yourusername.github.io/repositoryname/github-pages-examples/basic-site/`

### 2. Jekyll Site (`jekyll-site/`)

A full-featured blog and portfolio site built with Jekyll, GitHub's static site generator. Ideal for:
- Blogs and content sites
- Developer portfolios
- Documentation websites
- Sites requiring templates and collections

**Features:**
- Blog functionality with posts and categories
- Project portfolio with collections
- Custom layouts and includes
- SEO optimization with plugins
- Responsive minima-based theme
- Automated builds on GitHub Pages

**🚀 Quick Start:**
1. Fork this repository
2. Enable GitHub Pages in Settings → Pages
3. Select source: "GitHub Actions"
4. The Jekyll workflow will automatically build and deploy your site
5. Your site will be available at `https://yourusername.github.io/repositoryname/`

**Key Files:**
- `_config.yml` - Site configuration
- `_layouts/` - Page templates
- `_includes/` - Reusable components
- `_posts/` - Blog posts
- `_projects/` - Project collection
- `Gemfile` - Ruby dependencies

### 3. Custom Actions (`custom-actions/`)

A modern web application with custom build process using Webpack, Babel, and GitHub Actions. Perfect for:
- Single Page Applications (SPAs)
- Sites requiring modern JavaScript features
- Projects needing asset optimization
- Advanced deployment workflows

**Features:**
- Modern JavaScript (ES6+) with Babel transpilation
- CSS preprocessing and optimization
- Asset bundling and code splitting with Webpack
- Interactive charts with Chart.js
- Custom GitHub Actions workflow
- Development server with hot reload

**🚀 Quick Start:**
1. Fork this repository
2. Enable GitHub Pages in Settings → Pages
3. Select source: "GitHub Actions"
4. Push changes to trigger the custom build workflow
5. Your site will be available at `https://yourusername.github.io/repositoryname/github-pages-examples/custom-actions/`

**Development:**
```bash
cd github-pages-examples/custom-actions/
npm install
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
```

## 🛠️ GitHub Pages Configuration

### Setting Up GitHub Pages

1. **Repository Settings:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section

2. **Choose Source:**
   - **Deploy from a branch:** For basic HTML or Jekyll sites
   - **GitHub Actions:** For custom build processes

3. **Configure Branch and Folder:**
   - Select your main branch (usually `main` or `master`)
   - Choose root folder `/` or `/docs` folder
   - For specific examples, you can use subfolders

### Custom Domains

To use a custom domain with GitHub Pages:

1. **Add CNAME File:**
   ```
   # Create a file named CNAME in your repository root
   echo "yourdomain.com" > CNAME
   ```

2. **Configure DNS:**
   - **For apex domain (yourdomain.com):**
     ```
     A    185.199.108.153
     A    185.199.109.153
     A    185.199.110.153
     A    185.199.111.153
     ```
   
   - **For subdomain (www.yourdomain.com):**
     ```
     CNAME    yourusername.github.io
     ```

3. **Enable HTTPS:**
   - In repository settings → Pages
   - Check "Enforce HTTPS"

### Environment Variables and Secrets

For custom build processes, you can use GitHub Secrets:

1. Go to Settings → Secrets and variables → Actions
2. Add repository secrets for sensitive data
3. Reference in workflows:
   ```yaml
   env:
     API_KEY: ${{ secrets.API_KEY }}
   ```

## ⚙️ GitHub Actions Workflows

This repository includes three example workflows:

### 1. Basic Site Deployment (`.github/workflows/deploy-basic-site.yml`)

Simple deployment for static HTML sites:

```yaml
name: Deploy Basic Site to GitHub Pages
on:
  push:
    branches: ["main"]
    paths: ["github-pages-examples/basic-site/**"]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './github-pages-examples/basic-site'
      - uses: actions/deploy-pages@v4
```

### 2. Jekyll Deployment (`.github/workflows/deploy-jekyll.yml`)

Automated Jekyll build and deployment:

```yaml
name: Deploy Jekyll to GitHub Pages
on:
  push:
    branches: ["main"]
    paths: ["github-pages-examples/jekyll-site/**"]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
      - run: bundle exec jekyll build
      - uses: actions/upload-pages-artifact@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

### 3. Custom Build Process (`.github/workflows/deploy-custom-actions.yml`)

Modern JavaScript build with Webpack:

```yaml
name: Build and Deploy Custom Site
on:
  push:
    branches: ["main"]
    paths: ["github-pages-examples/custom-actions/**"]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

## 🎨 Customization Guide

### Basic Site Customization

1. **Update Content:**
   - Edit `index.html` for main content
   - Modify `styles.css` for styling
   - Update `script.js` for functionality

2. **Add Pages:**
   - Create new HTML files in the same directory
   - Link them in your navigation

3. **Customize Styling:**
   - Update CSS variables for theme colors
   - Modify responsive breakpoints
   - Add new components

### Jekyll Site Customization

1. **Site Configuration:**
   ```yaml
   # _config.yml
   title: "Your Site Title"
   description: "Your site description"
   author: "Your Name"
   email: "your.email@example.com"
   baseurl: "/your-repository-name"
   url: "https://yourusername.github.io"
   ```

2. **Adding Blog Posts:**
   ```markdown
   ---
   layout: post
   title: "Your Post Title"
   date: 2025-01-15 10:00:00 -0300
   author: "Your Name"
   categories: [jekyll, tutorial]
   tags: [github-pages, blogging]
   ---
   
   Your post content here...
   ```

3. **Creating Projects:**
   ```markdown
   ---
   layout: project
   title: "Project Name"
   description: "Brief project description"
   technologies: ["React", "Node.js", "MongoDB"]
   github_url: "https://github.com/username/project"
   demo_url: "https://project-demo.com"
   featured: true
   ---
   
   Detailed project description...
   ```

### Custom Actions Customization

1. **Webpack Configuration:**
   - Update `webpack.config.js` for build customization
   - Add new loaders for different file types
   - Configure optimization settings

2. **Adding Dependencies:**
   ```bash
   npm install package-name
   # Update package.json and webpack config as needed
   ```

3. **Environment-Specific Builds:**
   ```javascript
   // webpack.config.js
   module.exports = (env, argv) => {
     const isProduction = argv.mode === 'production';
     return {
       // Configuration based on environment
     };
   };
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Site Not Loading:**
   - Check GitHub Pages settings in repository
   - Verify branch and folder configuration
   - Wait a few minutes for deployment to complete

2. **Jekyll Build Errors:**
   - Check workflow logs in Actions tab
   - Verify `_config.yml` syntax
   - Ensure all required gems are in `Gemfile`

3. **Custom Domain Not Working:**
   - Verify DNS configuration
   - Check CNAME file in repository root
   - Wait for DNS propagation (up to 24 hours)

4. **Workflow Failures:**
   - Check Actions tab for error details
   - Verify file paths in workflow configuration
   - Ensure required secrets are configured

### Debug Tips

1. **Enable Debug Logging:**
   ```yaml
   # In workflow file
   env:
     ACTIONS_STEP_DEBUG: true
   ```

2. **Local Testing:**
   ```bash
   # For Jekyll sites
   bundle exec jekyll serve --livereload
   
   # For custom builds
   npm run dev
   ```

3. **Validate Configurations:**
   - Use online YAML validators for workflow files
   - Test Jekyll builds locally before pushing
   - Verify HTML/CSS with validators

## 📚 Additional Resources

### GitHub Pages Documentation
- [GitHub Pages Basics](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Jekyll Resources
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Jekyll Themes](https://jekyllrb.com/docs/themes/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

### Modern Web Development
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Babel Documentation](https://babeljs.io/docs/en/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Issues:**
   - Use GitHub Issues to report bugs
   - Provide detailed reproduction steps
   - Include error messages and logs

2. **Suggest Improvements:**
   - Open feature requests in Issues
   - Discuss implementation approaches
   - Provide use cases and examples

3. **Submit Pull Requests:**
   - Fork the repository
   - Create a feature branch
   - Follow existing code style
   - Include tests and documentation
   - Submit PR with clear description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GitHub Pages](https://pages.github.com/) for free static site hosting
- [Jekyll](https://jekyllrb.com/) for the amazing static site generator
- [Chart.js](https://www.chartjs.org/) for beautiful charts
- [Webpack](https://webpack.js.org/) for powerful bundling capabilities

---

## 📞 Support

If you have questions or need help:

1. Check the [troubleshooting section](#-troubleshooting)
2. Search existing [GitHub Issues](https://github.com/richardborgesdev/repositoryname/issues)
3. Create a new issue with detailed information
4. Join the discussion in our [Discussions](https://github.com/richardborgesdev/repositoryname/discussions) tab

Happy coding! 🎉