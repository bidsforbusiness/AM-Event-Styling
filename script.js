document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }

    // Close mobile menu on link click (for better UX)
    navMenu.querySelectorAll("li a").forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
        });
    });

    // Contact form validation
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields before submitting.");
                event.preventDefault();
            }
        });
    }
});
