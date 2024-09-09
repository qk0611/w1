document.addEventListener("DOMContentLoaded", () => {
    const transitionOverlay = document.querySelector(".transition-overlay");
    const links = document.querySelectorAll("[data-link]");
    const animatedTexts = document.querySelectorAll(".animated-text");

    const fadeIn = () => {
        transitionOverlay.classList.add("show");
    };

    const fadeOut = () => {
        transitionOverlay.classList.remove("show");
    };

    const animateTexts = () => {
        animatedTexts.forEach((text, index) => {
            setTimeout(() => {
                text.classList.add("show");
            }, index * 200); // Сдвиг анимации по времени
        });
    };

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            fadeIn();

            setTimeout(() => {
                window.location.hash = targetId;
                fadeOut();
                animateTexts();
            }, 500);
        });
    });

    window.addEventListener("pageshow", (event) => {
        if (event.persisted) {
            fadeOut();
            animateTexts();
        }
    });

    fadeOut();
    animateTexts();
});
