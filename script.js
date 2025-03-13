/* script.js - A|M Event Styling Website */

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
    
    // Toggle mobile menu (if applicable)
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }
    
    // Simple form validation
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

    // AI Chatbot initialization
    (function() {
        var chatbot = document.createElement('script');
        chatbot.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        chatbot.async = true;
        document.body.appendChild(chatbot);

        chatbot.onload = function() {
            window.botpressWebChat.init({
                "botId": "YOUR_BOT_ID_HERE",
                "host": "https://cdn.botpress.cloud/webchat/v1",
                "clientId": "YOUR_CLIENT_ID_HERE"
            });
        };
    })();
});
