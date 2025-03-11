document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".social-links a");
    
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.3)";
            this.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s";
            this.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.7)";
        });
        
        link.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });

    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.opacity = "0.8";
        } else {
            header.style.opacity = "1";
        }
    });
});