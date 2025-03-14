/* script.js - A|M Event Styling Website */

document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
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

    // Toggle Mobile Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }
});
