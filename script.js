
// =====================================
// 1. TYPING ANIMATION
// =====================================

const typingElement = document.getElementById("typing");

const roles = [
    "ECE Student",
    "Web Developer",
    "IoT Enthusiast",
    "Tech Explorer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    typingElement.textContent = currentRole.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            charIndex = 0;
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 100);
}

typeEffect();


// =====================================
// 2. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    menuToggle.textContent =
        navMenu.classList.contains("open") ? "✕" : "☰";
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});


// =====================================
// 3. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".section-heading, .glass-card, .hero-content, .hero-visual"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// =====================================
// 4. ACTIVE NAVIGATION ON SCROLL
// =====================================

const sections = document.querySelectorAll("main section");

function updateActiveNavigation() {
    let currentSection = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
}

window.addEventListener("scroll", updateActiveNavigation);


// =====================================
// 5. BACK TO TOP BUTTON
// =====================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =====================================
// 6. AUTOMATIC COPYRIGHT YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================
// 7. CONSOLE MESSAGE
// =====================================

console.log(
    "%cWelcome to Kavinmoorthy's Portfolio!",
    "color: #579bff; font-size: 18px; font-weight: bold;"
);
