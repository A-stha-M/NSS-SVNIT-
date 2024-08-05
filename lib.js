// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.display = 'flex';
        navbar.style.backgroundColor = '#011F35'; // Change to black on scroll
    } else {
        navbar.style.display = 'flex'; // Keep the navbar visible
        navbar.style.backgroundColor = 'transparent'; // Revert to transparent if desired
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.container').classList.add('in-view');
                let steps = document.querySelectorAll('.step');
                let currentStep = 0;

                const startNextAnimation = (index) => {
                    if (index >= steps.length) {
                        // Restart the animation loop after a short delay
                        setTimeout(() => {
                            currentStep = 0;
                            startNextAnimation(currentStep);
                        }, 1000); // Adjust the delay as needed
                        return;
                    }

                    steps[index].classList.add('active');

                    // Remove the 'active' class and trigger the next animation when the current one ends
                    steps[index].addEventListener('animationend', () => {
                        steps[index].classList.remove('active');
                        startNextAnimation(index + 1); // Start next animation
                    }, { once: true });
                };

                // Start the animation loop
                startNextAnimation(currentStep);

                // Disconnect observer after starting the animation loop
                observer.disconnect();
            }
        });
    }, options);

    let target = document.querySelector('.container');
    observer.observe(target);
});


