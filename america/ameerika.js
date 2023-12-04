document.addEventListener("DOMContentLoaded", function () {
    // Tagasi peallehele nupp
    const backButton = document.getElementById('back-to-main');

    backButton.addEventListener('click', function () {
        // See link viib tagasi pealehele
        const githubLink = 'https://github.com/DonCheetos/Veebilehe-projekt/blob/main/content.html';

        //  Navigeerib pealehele samal tab-il
        window.location.href = githubLink;
    });
});
