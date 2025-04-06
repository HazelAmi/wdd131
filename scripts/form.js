
// an array of product objects
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
]; 


// document.addEventListener("DOMContentLoaded", () => {
//   // Dynamically set the current year
//   document.getElementById("currentyear").textContent = new Date().getFullYear();

//   // Display last modified date
//   document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

//   // Populate product dropdown
//   const productSelect = document.getElementById("productName");
//   products.forEach(product => {
//     const option = document.createElement("option");
//     option.value = product.id;
//     option.textContent = product.name;
//     productSelect.appendChild(option);
//   });

//   // Handle form submission
//   const form = document.getElementById("reviewForm");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Get current count
//     let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
//     reviewCount++;
//     localStorage.setItem('reviewCount', reviewCount);

//     // Store product name for thank you message
//     const selectedProduct = form.productName.value;
//     localStorage.setItem('lastReviewedProduct', selectedProduct);

//     // Redirect to thank you page
//     window.location.href = "review.html";
//   });

//   // Load and display review count
//   const count = localStorage.getItem("reviewCount") || 0;
//   document.getElementById("reviewCount").textContent = count;

//   // Show thank you message
//   const productId = localStorage.getItem("lastReviewedProduct");
//   if (productId) {
//     document.getElementById("thankYouMessage").textContent = `Your review for product ID "${productId}" has been recorded.`;
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const currentYear = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastModified");
  const reviewCountElement = document.getElementById("reviewCount");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const productSelect = document.getElementById("productName");
  const form = document.getElementById("reviewForm");

  // Display current year
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Display last modified
  if (lastModified) {
    lastModified.textContent = "Last Modification: " + document.lastModified;
  }

  // Populate product dropdown
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // Handle form submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
      reviewCount++;
      localStorage.setItem("reviewCount", reviewCount);

      const selectedProduct = form.productName.value;
      localStorage.setItem("lastReviewedProduct", selectedProduct);

      window.location.href = "review.html";
    });
  }

  // Display review count and thank you message on review.html
  if (reviewCountElement) {
    reviewCountElement.textContent = localStorage.getItem("reviewCount") || 0;
  }

  if (thankYouMessage) {
    const productId = localStorage.getItem("lastReviewedProduct");
    if (productId) {
      // thankYouMessage.textContent = `Your review for product ID "${productId}" has been recorded.`;
      thankYouMessage.textContent = `Your review has been submitted.`;
    }
  }
});