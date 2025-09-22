// GitHub Pages Example JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeCounter();
    initializeTheme();
    initializeClock();
    initializeMobileMenu();
    initializeScrollEffects();
});

// Counter functionality
let counterValue = 0;

function initializeCounter() {
    updateCounterDisplay();
}

function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
    animateCounter();
}

function decrementCounter() {
    counterValue--;
    updateCounterDisplay();
    animateCounter();
}

function updateCounterDisplay() {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.textContent = counterValue;
    }
}

function animateCounter() {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.style.transform = 'scale(1.2)';
        counterElement.style.color = 'var(--primary-color)';
        
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
            counterElement.style.color = 'var(--text-primary)';
        }, 150);
    }
}

// Theme switching functionality
function initializeTheme() {
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    updateThemeButton();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    updateThemeButton();
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
    
    // Add animation effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeButton() {
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    
    if (themeIcon && themeText) {
        if (currentTheme === 'dark') {
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light Mode';
        } else {
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark Mode';
        }
    }
}

// Clock functionality
function initializeClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const clockElement = document.getElementById('current-time');
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        clockElement.innerHTML = `
            <div style="font-size: 1.2em; font-weight: bold;">${timeString}</div>
            <div style="font-size: 0.9em; opacity: 0.8;">${dateString}</div>
        `;
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// Scroll effects
function initializeScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .example-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
                }
            } else {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                }
            }
        }
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Expose functions to global scope for inline event handlers
window.incrementCounter = incrementCounter;
window.decrementCounter = decrementCounter;
window.toggleTheme = toggleTheme;

// Add some fun Easter eggs
document.addEventListener('keydown', function(e) {
    // Konami code: ↑↑↓↓←→←→BA
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    if (!window.konamiProgress) window.konamiProgress = 0;
    
    if (e.code === konamiCode[window.konamiProgress]) {
        window.konamiProgress++;
        if (window.konamiProgress === konamiCode.length) {
            showNotification('🎉 Konami Code activated! You found the Easter egg!', 'success');
            // Add some fun effect
            document.body.style.animation = 'rainbow 2s ease';
            window.konamiProgress = 0;
            
            // Add rainbow animation
            const rainbowStyle = document.createElement('style');
            rainbowStyle.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(rainbowStyle);
            
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
        }
    } else {
        window.konamiProgress = 0;
    }
});

console.log(`
🚀 GitHub Pages Example - JavaScript Loaded Successfully!

Features included:
• Interactive counter with animations
• Dark/Light theme switching with persistence
• Real-time clock display
• Smooth scrolling navigation
• Mobile-responsive design
• Scroll-based animations
• Easter egg (try the Konami code!)

Created by Richard Borges for educational purposes.
GitHub: https://github.com/richardborgesdev
`);