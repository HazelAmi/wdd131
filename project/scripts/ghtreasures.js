// Array of destinations
const destinations = [
    {
        title: "Cape Coast Castle",
        image: "images/cape coast.jpg",
        alt: "Cape Coast Castle",
        history: "A UNESCO World Heritage site, Cape Coast Castle was a major hub during the transatlantic slave trade.",
        highlights: "Explore the dungeons, the Door of No Return, and the museum.",
        tips: "Guided tours are available; visit early to avoid crowds."
    },
    {
        title: "Kakum National Park",
        image: "images/kakum park.jpg",
        alt: "Kakum National Park canopy walkway",
        history: "Established in 1992, this park protects a tropical rainforest.",
        highlights: "Walk the famous canopy walkway 30 meters above the forest floor.",
        tips: "Wear comfortable shoes; the canopy walk takes about an hour."
    },
    {
        title: "Mole National Park",
        image: "images/mole park.jpg",
        alt: "Mole National Park wildlife",
        history: "Ghana’s largest wildlife refuge, founded in 1958.",
        highlights: "Spot elephants, antelopes, and over 300 bird species on a safari.",
        tips: "Best visited during the dry season (December to April)."
    },
    {
        title: "Elmina Castle",
        image: "images/elmina.jpg",
        alt: "Lake Volta scenery",
        history: "Built by the Portuguese in 1482, Elmina Castle is a UNESCO World Heritage Site and one of the oldest European buildings in sub-Saharan Africa. Explore its haunting dungeons and learn about its role in the transatlantic slave trade.",
        highlights: "Stunning ocean views from the castle ramparts.",
        tips: "Hire a local guide for the best experience."
    },
{
        title: "Larabanga Mosque",
        image: "images/larabanga.jpg",
        alt: "Larabanga Mosque",
        history: "Known as the “Mecca of West Africa,” this 15th-century mosque is Ghana’s oldest and one of West Africa’s most ancient. Its unique Sudano-Sahelian architecture is a must-see.  ",
        highlights: "Rare chance to view a centuries-old Qur’an.",
        tips: "Guided tours are available; visit early to avoid crowds."
    },
    
];

// Function to display the last modified date
function displayLastModified() {
    const lastModifiedElements = document.querySelectorAll("#lastModified");
    lastModifiedElements.forEach(element => {
        element.textContent = document.lastModified;
    });
}

// Function to toggle the hamburger menu and swap to X
function toggleHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const isExpanded = navMenu.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isExpanded);
        hamburger.setAttribute("aria-label", isExpanded ? "Close navigation menu" : "Open navigation menu");
    });
}

// Function to dynamically create destination articles
function createDestinationArticles() {
    const container = document.querySelector("#destinations-container");
    if (!container) return; // Only run on destinations.html

    destinations.forEach(destination => {
        const article = document.createElement("article");
        article.classList.add("destination");

        article.innerHTML = `
            <h2>${destination.title}</h2>
            <img src="${destination.image}" alt="${destination.alt}" loading="lazy">
            <p><strong>History:</strong> ${destination.history}</p>
            <p><strong>Highlights:</strong> ${destination.highlights}</p>
            <p><strong>Visitor Tips:</strong> ${destination.tips}</p>
            <button class="favorite-btn" data-site="${destination.title}">Add to Favorites</button>
        `;

        container.appendChild(article);
    });
}

// Function to manage favorites using localStorage
function manageFavorites() {
    const favoritesList = document.querySelector("#favorites-list");
    if (!favoritesList) return; // Only run on destinations.html

    // Load favorites from localStorage as a comma-separated string
    let favoritesString = localStorage.getItem("favorites") || "";

    // Display current favorites by splitting the string
    function updateFavoritesList() {
        favoritesList.innerHTML = "";
        if (favoritesString) {
            const sites = favoritesString.split(",").filter(site => site.trim() !== "");
            sites.forEach(site => {
                const li = document.createElement("li");
                li.textContent = site.trim();
                favoritesList.appendChild(li);
            });
        }
    }

    // Initial display of favorites
    updateFavoritesList();

    // Add event listeners to favorite buttons (dynamically created)
    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const site = button.getAttribute("data-site");

            // Conditional branching: Check if site is already in favorites
            if (!favoritesString.includes(site)) {
                if (favoritesString) {
                    favoritesString = `${favoritesString},${site}`;
                } else {
                    favoritesString = site;
                }
                localStorage.setItem("favorites", favoritesString);
                updateFavoritesList();
                button.textContent = "Added to Favorites!";
                button.disabled = true;
            }
        });
    });
}

// Function to dynamically create the contact form
function createContactForm() {
    const container = document.querySelector("#form-container");
    if (!container) return; // Only run on contact.html

    const form = document.createElement("form");
    form.id = "contact-form";
    form.setAttribute("aria-label", "Contact form");

    form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required aria-required="true">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required aria-required="true">

        <label for="message">Message:</label>
        <textarea id="message" name="message" required aria-required="true"></textarea>

        <button type="submit">Submit</button>
    `;

    container.appendChild(form);
}

// Function to handle form submission
function handleFormSubmission() {
    const form = document.querySelector("#contact-form");
    const formMessage = document.querySelector("#form-message");

    if (form && formMessage) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const name = form.querySelector("#name").value;
            const email = form.querySelector("#email").value;
            const message = form.querySelector("#message").value;

            const confirmationMessage = `Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`;
            formMessage.textContent = confirmationMessage;

            form.reset();
        });
    }
}

// Initialize all functionality on page load
document.addEventListener("DOMContentLoaded", () => {
    displayLastModified();
    toggleHamburgerMenu();
    createDestinationArticles();
    createContactForm();
    manageFavorites();
    handleFormSubmission();
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Optional: Auto-play every 5 seconds
setInterval(nextSlide, 5000);
