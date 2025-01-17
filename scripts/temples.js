document.addEventListener("DOMContentLoaded", function() {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

    // Hamburger menu toggle functionality
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("navList");

    hamburger.addEventListener("click", function() {
        navList.classList.toggle("active");
        // Change the hamburger icon to "X" when menu is open
        if (navList.classList.contains("active")) {
            hamburger.innerHTML = "&#10005;"; // "X" symbol
        } else {
            hamburger.innerHTML = "&#9776;"; // Hamburger symbol
        }
    });
});
