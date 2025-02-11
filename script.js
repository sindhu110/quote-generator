// Array of motivational quotes
const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Act as if what you do makes a difference. It does. – William James",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Doubt kills more dreams than failure ever will. – Suzy Kassem"
];

// Function to generate a new quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Event listener for the button
document.getElementById("new-quote").addEventListener("click", generateQuote);

// Generate a quote on page load
window.onload = generateQuote;