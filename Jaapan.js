document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tagasi peallehele nupp
    const backButton = document.getElementById('back-to-main');
    backButton.addEventListener('click', function () {
        window.location.href = "main.html"; //Viib tagasi pealehele
    });
});
