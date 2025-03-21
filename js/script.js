document.addEventListener("DOMContentLoaded", function() {
    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }

    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 50, behavior: "smooth" });
            }
        });
    });
});
/* Header Image */
.header {
    position: relative;
    text-align: center;
    background: #222;
    padding: 0;
}

.header-image {
    width: 100%;
    height: 300px; /* Adjust height as needed */
    object-fit: cover;
}
