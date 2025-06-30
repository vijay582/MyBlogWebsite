// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Here you would typically send the email to your server
    console.log('Subscribed with email:', email);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

// You can add more interactive features as needed
// For example, a simple dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.backgroundColor = '#333';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#f0f0f0';
    } else {
        document.body.style.backgroundColor = '#f9f9f9';
        document.body.style.color = '#333';
    }
});

document.body.appendChild(darkModeToggle);