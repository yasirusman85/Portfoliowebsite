// Add smooth scrolling to anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
// Get the form element
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', e => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});
<script>
    // Select all links inside the navigation menu
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Get the target section's id from the link's href attribute
            const targetId = link.getAttribute('href').substring(1);

            // Find the target section using its id
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section with a nice transition effect
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
</script>
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Toggle Light Mode';
    } else {
        themeToggle.textContent = 'Toggle Dark Mode';
    }
});
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});
