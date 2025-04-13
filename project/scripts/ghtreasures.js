// // Dynamically set the current year
// document.getElementById("currentyear").textContent = new Date().getFullYear();
// // Display last modified date
// document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// // Function to toggle the hamburger menu and swap to X
// function toggleHamburgerMenu() {
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");

//     hamburger.addEventListener("click", () => {
//         navMenu.classList.toggle("active");
//         const isExpanded = navMenu.classList.contains("active");
//         hamburger.setAttribute("aria-expanded", isExpanded);
//         // Update aria-label based on menu state
//         hamburger.setAttribute("aria-label", isExpanded ? "Close navigation menu" : "Open navigation menu");
//     });
// }

// // Function to manage favorites using localStorage (without arrays or JSON)
// function manageFavorites() {
//     const favoriteButtons = document.querySelectorAll(".favorite-btn");
//     const favoritesList = document.querySelector("#favorites-list");

//     // Load favorites from localStorage as a comma-separated string
//     let favoritesString = localStorage.getItem("favorites") || "";

//     // Display current favorites by splitting the string
//     function updateFavoritesList() {
//         favoritesList.innerHTML = "";
//         if (favoritesString) {
//             // Split the string into individual site names
//             const sites = favoritesString.split(",").filter(site => site.trim() !== "");
//             sites.forEach(site => {
//                 const li = document.createElement("li");
//                 li.textContent = site.trim();
//                 favoritesList.appendChild(li);
//             });
//         }
//     }

//     // Initial display of favorites
//     updateFavoritesList();

//     // Add event listeners to favorite buttons
//     favoriteButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const site = button.getAttribute("data-site");

//             // Conditional branching: Check if site is already in favorites
//             if (!favoritesString.includes(site)) {
//                 // Append the new site to the string
//                 if (favoritesString) {
//                     favoritesString = `${favoritesString},${site}`;
//                 } else {
//                     favoritesString = site;
//                 }
//                 localStorage.setItem("favorites", favoritesString);
//                 updateFavoritesList();
//                 button.textContent = "Added to Favorites!";
//                 button.disabled = true;
//             }
//         });
//     });
// }

// // Function to handle form submission
// function handleFormSubmission() {
//     const form = document.querySelector("#contact-form");
//     const formMessage = document.querySelector("#form-message");

//     if (form) {
//         form.addEventListener("submit", event => {
//             event.preventDefault();

//             const name = form.querySelector("#name").value;
//             const email = form.querySelector("#email").value;
//             const message = form.querySelector("#message").value;

//             // Use template literals for string output
//             const confirmationMessage = `Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`;
//             formMessage.textContent = confirmationMessage;

//             // Clear form
//             form.reset();
//         });
//     }
// }

// // Initialize all functionality on page load
// document.addEventListener("DOMContentLoaded", () => {
//     displayLastModified();
//     toggleHamburgerMenu();
//     manageFavorites();
//     handleFormSubmission();
// });

// Function to display the last modified date
function displayLastModified() {
    const lastModifiedElements = document.querySelectorAll("#lastModified");
    lastModifiedElements.forEach(element => {
        element.textContent = document.lastModified;
    });
}
// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Function to toggle the hamburger menu and swap to X
function toggleHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const isExpanded = navMenu.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isExpanded);
        // Update aria-label based on menu state
        hamburger.setAttribute("aria-label", isExpanded ? "Close navigation menu" : "Open navigation menu");
    });
}

// Function to manage favorites using localStorage (without arrays or JSON)
function manageFavorites() {
    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    const favoritesList = document.querySelector("#favorites-list");

    // Load favorites from localStorage as a comma-separated string
    let favoritesString = localStorage.getItem("favorites") || "";

    // Display current favorites by splitting the string
    function updateFavoritesList() {
        favoritesList.innerHTML = "";
        if (favoritesString) {
            // Split the string into individual site names
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

    // Add event listeners to favorite buttons
    favoriteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const site = button.getAttribute("data-site");

            // Conditional branching: Check if site is already in favorites
            if (!favoritesString.includes(site)) {
                // Append the new site to the string
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

// Function to handle form submission
function handleFormSubmission() {
    const form = document.querySelector("#contact-form");
    const formMessage = document.querySelector("#form-message");

    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const name = form.querySelector("#name").value;
            const email = form.querySelector("#email").value;
            const message = form.querySelector("#message").value;

            // Use template literals for string output
            const confirmationMessage = `Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`;
            formMessage.textContent = confirmationMessage;

            // Clear form
            form.reset();
        });
    }
}

// Initialize all functionality on page load
document.addEventListener("DOMContentLoaded", () => {
    displayLastModified();
    toggleHamburgerMenu();
    manageFavorites();
    handleFormSubmission();
});