// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


//hamburger menu
const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});




