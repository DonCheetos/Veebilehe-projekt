document.querySelectorAll('a[href^="#"]').forEach(anchor => {  //tagab sujuva kerimise käitumise veebilehe ankrulinkidele. Kui kasutaja klikib lingil, mis viitab lehekülje sees olevale elemendi ID-le, kerib leht sujuvalt soovitud asukohta, mitte ei hüppa sinna kohe.
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect(); // Funktsioon kontrollib, kas antud element on kasutaja ekraanil nähtav (viewport'is). element.getBoundingClientRect() annab elemendi asukoha ja suuruse teavet, mille top, left, bottom, ja right väärtusi võrreldakse akna mõõtmetega.
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function runOnScroll() { //See funktsioon lisatakse akna scroll sündmusele ja käivitub, kui kasutaja lehekülge kerib. Funktsioon kontrollib iga .culture-image klassiga pildi puhul, kas see on viewport'is. Kui on, siis lisatakse pildile fade-in klass, mis tavaliselt käivitab visuaalse efekti, nagu näiteks aeglane ilmumine (fade in).
    document.querySelectorAll('.culture-image').forEach(img => {
        if (isInViewport(img)) {
            img.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', runOnScroll); //See rida registreerib runOnScroll funktsiooni käivituma iga kord, kui kasutaja kerib lehekülge.
