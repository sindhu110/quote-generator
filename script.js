// List of quotes
const quotes = [
    "Believe in yourself and all that you are.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Difficulties in life are intended to make us better, not bitter.",
    "Do what you can, with what you have, where you are.",
    "Dream big and dare to fail.",
    "Act as if what you do makes a difference. It does.",
    "With the new day comes new strength and new thoughts.",
    "You are never too old to set another goal or to dream a new dream.",
    "Happiness depends upon ourselves."
];

// Function to generate a new quote
function generateQuote() {
    const quoteText = document.getElementById("quote"); // Get the quote element
    const randomIndex = Math.floor(Math.random() * quotes.length); // Get random index
    
    // Apply fade-out effect
    quoteText.style.opacity = 0;

    setTimeout(() => {
        quoteText.innerText = "${quotes[randomIndex]}"; // Corrected way to set text
        quoteText.style.opacity = 1; // Apply fade-in effect
    }, 500);
}

// Attach event listener to the button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("quoteButton").addEventListener("click", generateQuote);
    generateQuote(); // Show a random quote when the page loads
});