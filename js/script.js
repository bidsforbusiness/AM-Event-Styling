document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Toggle Mobile Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Animate Images on Scroll
    const serviceItems = document.querySelectorAll(".service-item img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "scale(1.1)";
            } else {
                entry.target.style.transform = "scale(1)";
            }
        });
    }, { threshold: 0.5 });

    serviceItems.forEach(img => observer.observe(img));
});
