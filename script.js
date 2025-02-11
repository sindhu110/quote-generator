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
    const quoteText = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Apply fade-out effect
    quoteText.style.opacity = 0;
    
    setTimeout(() => {
        quoteText.textContent = "${quotes[randomIndex]}";
        
        // Apply fade-in effect
        quoteText.style.opacity = 1;
    }, 500);
}

// Attach event listener to the button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("quoteButton").addEventListener("click", generateQuote);
    generateQuote(); // Generate first quote on page load
});