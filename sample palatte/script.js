// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate form submission (replace with actual form handling logic)
    alert('Form submitted successfully!');
    this.reset();
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
document.addEventListener("DOMContentLoaded", function(event) {
    const typewriterText = "Empowering the Underdog in the Digital Landscape";
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            typewriterElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (typeof i == 'undefined') {
            i = 0;
        }
        if (i < typewriterText.length) {
            typeWriter(typewriterText, i);
        }
    }

    StartTextAnimation();
});