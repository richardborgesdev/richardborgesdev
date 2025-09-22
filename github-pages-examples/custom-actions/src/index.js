import './styles.css';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('GitHub Pages Custom Build Demo loaded!');
    
    // Create deployment statistics chart
    createDeploymentChart();
    
    // Add interactive features
    addInteractiveFeatures();
});

function createDeploymentChart() {
    const ctx = document.getElementById('deploymentChart');
    
    if (!ctx) {
        console.error('Chart canvas not found');
        return;
    }
    
    const deploymentData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Successful Deployments',
            data: [12, 19, 15, 25, 22, 30],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4
        }, {
            label: 'Failed Deployments',
            data: [2, 3, 1, 2, 1, 0],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4
        }]
    };
    
    const config = {
        type: 'line',
        data: deploymentData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'GitHub Pages Deployment Statistics'
                },
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    
    new Chart(ctx, config);
}

function addInteractiveFeatures() {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to workflow steps
    const workflowSteps = document.querySelectorAll('.step');
    
    workflowSteps.forEach((step, index) => {
        step.addEventListener('click', () => {
            // Remove active class from all steps
            workflowSteps.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked step
            step.classList.add('active');
            
            // Show step details
            showStepDetails(index);
        });
    });
}

function showStepDetails(stepIndex) {
    const stepDetails = [
        'When you push code to your repository, GitHub detects the changes and prepares to trigger the workflow.',
        'GitHub Actions automatically starts the workflow based on the configured triggers in your .yml file.',
        'Webpack processes your source files, bundles JavaScript, optimizes CSS, and prepares assets for production.',
        'The built files are automatically deployed to GitHub Pages, making your site live for the world to see.'
    ];
    
    // Create or update step details display
    let detailsElement = document.querySelector('.step-details');
    
    if (!detailsElement) {
        detailsElement = document.createElement('div');
        detailsElement.className = 'step-details';
        document.querySelector('.workflow-section').appendChild(detailsElement);
    }
    
    detailsElement.innerHTML = `
        <h4>Step ${stepIndex + 1} Details</h4>
        <p>${stepDetails[stepIndex]}</p>
    `;
    
    detailsElement.style.display = 'block';
}

// Export functions for testing
export { createDeploymentChart, addInteractiveFeatures };