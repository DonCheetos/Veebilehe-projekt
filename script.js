// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header
var header = document.querySelector('.main-header');
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.onscroll = function() {
    stickyHeader();
};

// Contact form submission (example of a more advanced feature)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // You would typically implement an AJAX request here to submit the form without reloading the page
    // For example:
    /*
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-server-endpoint', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (this.status === 200) {
            console.log('Form submitted successfully!');
            // handle successful form submission (e.g., display a thank you message)
        } else {
            console.error('An error occurred!');
            // handle errors (e.g., display an error message)
        }
    };
    xhr.send('name=' + encodeURIComponent(document.getElementById('name').value) +
             '&email=' + encodeURIComponent(document.getElementById('email').value) +
             '&message=' + encodeURIComponent(document.getElementById('message').value));
    */

    console.log('Form submitted!'); // Placeholder for demonstration
});
