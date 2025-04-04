// Define the base URL of your repository or GitHub Pages URL
const baseURL = "https://yourusername.github.io/wdd230";  // Replace with your GitHub Pages URL

// URL for links.json (relative path from root folder)
const linksURL = "data/links.json";

// Function to fetch the links data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error("Failed to fetch links data.");
        const data = await response.json();

        // Call function to display the links dynamically
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links data:", error);
    }
}

// Function to display the links for each week
function displayLinks(weeks) {
    // Find the container element where links will be displayed
    const linksContainer = document.querySelector(".info-card ul");

    // Clear existing content
    linksContainer.innerHTML = "";

    // Loop through each week and create a list item
    weeks.forEach(week => {
        // Create a new list item for the week
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${week.week}:</strong> `; // Bold week title

        // Create links and separate them with a " | " separator
        week.links.forEach((link, index) => {
            const anchor = document.createElement("a");
            anchor.href = `${baseURL}/${link.url}`;
            anchor.textContent = link.title;

            // Append link to list item
            listItem.appendChild(anchor);

            // Add separator (except after last link)
            if (index < week.links.length - 1) {
                listItem.innerHTML += " | ";
            }
        });

        // Append the list item to the links container
        linksContainer.appendChild(listItem);
    });
}

// Call the getLinks function to load the data
getLinks();
