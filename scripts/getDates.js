// Update the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Update the last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// Page Visit Counter
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve visit count from localStorage (default to 0 if null)
    let visitCount = localStorage.getItem("visitCount") ? parseInt(localStorage.getItem("visitCount"), 10) : 0;
    
    // Increment visit count
    visitCount++;

    // Display updated count
    document.getElementById("visit-counter").textContent = visitCount;

    // Save new count back to localStorage
    localStorage.setItem("visitCount", visitCount);
});
