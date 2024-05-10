// Data for proficiency percentages
const skillProficiency = {
    "Leadership Mindset": "85%",
    "Good Problem Solver": "90%",
    "Innovative": "80%",
    "Good Speaker": "75%",
    "Creative Writer": "70%",
};

const languageProficiency = {
    "Filipino": "95%",
    "English": "85%",
    "Spanish": "50%",
};

// Function to add tooltips to list items
function addProficiencyTooltips(listElement, proficiencyData) {
    const items = listElement.querySelectorAll("li");
    
    items.forEach((item) => {
        const skillName = item.textContent.trim(); // Get the text from the list item
        const proficiency = proficiencyData[skillName]; // Get the proficiency percentage
        
        if (proficiency) {
            const tooltip = document.createElement("span"); // Create tooltip element
            tooltip.className = "tooltip"; // Assign class for styling
            tooltip.textContent = proficiency; // Set tooltip text
            item.appendChild(tooltip); // Append tooltip to the list item
        }
    });
}

// Add tooltips to the skills and languages lists
document.addEventListener("DOMContentLoaded", () => {
    const skillsList = document.querySelector(".skills ul");
    const languagesList = document.querySelector(".languages ul");

    if (skillsList) {
        addProficiencyTooltips(skillsList, skillProficiency); // Add tooltips to skills
    }

    if (languagesList) {
        addProficiencyTooltips(languagesList, languageProficiency); // Add tooltips to languages
    }
});
