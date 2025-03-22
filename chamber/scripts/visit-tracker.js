document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");

    const now = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const daysDifference = Math.floor((now - lastVisitTime) / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} day${daysDifference === 1 ? "" : "s"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
});
