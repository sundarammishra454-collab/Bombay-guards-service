

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const phone = event.target.querySelector('input[type="tel"]').value;
    const service = event.target.querySelector('select').value;
    
    // Simple validation
    if (!name || !email || !phone || !service) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you ${name}! We've received your request for ${service} services. Our team will contact you within 24 hours at ${phone}. For immediate assistance, call +91 98196 70208.`);
    
    // Reset form
    event.target.reset();
}



// Add animation on scroll for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Toggle contact info panel
function toggleContactInfo() {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.classList.toggle('show');
}

// Close contact info when clicking outside
document.addEventListener('click', function(event) {
    const contactInfo = document.getElementById('contactInfo');
    const contactFab = document.querySelector('.contact-fab');
    
    if (contactInfo && contactFab && 
        !contactInfo.contains(event.target) && 
        !contactFab.contains(event.target)) {
        contactInfo.classList.remove('show');
    }
});

// Observe service cards when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});