
// =============================
// MOBILE NAVIGATION
// =============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close navigation after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});


// LIGHT AND DARK MODE

// LIGHT AND DARK MODE

lucide.createIcons();

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    themeToggle.innerHTML = document.body.classList.contains("light-mode")
        ? '<i data-lucide="moon"></i>'
        : '<i data-lucide="sun"></i>';

    lucide.createIcons();
});


// =============================
// ACTIVE NAVIGATION
// =============================

const allSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    allSections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
    ".section-heading, .about > p, .skill-card, .service-card, .project-card, .contact form"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


// =============================
// CONTACT FORM
// =============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = contactForm.querySelector('[name="name"]');
    const email = contactForm.querySelector('[name="email"]');
    const message = contactForm.querySelector('[name="message"]');

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Please write your message.";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMessage").textContent = "Thank you! Your form is valid.";
        contactForm.submit();
    }
});


// =============================
// BACK TO TOP
// =============================

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }

});
