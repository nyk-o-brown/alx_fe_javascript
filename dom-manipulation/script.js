document.addEventListener('DOMContentLoaded', () => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuote');
    const quotes = [
        { text: "The only way to do great work is to love what you do.", category: "Motivation" },
        { text: "Life is what happens when you're busy making other plans.", category: "Life" },
        { text: "The purpose of our lives is to be happy.", category: "Happiness" },
    ];

    // Function to display a random quote using innerHTML
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteDisplay.innerHTML = `"${randomQuote.text}" - <strong>${randomQuote.category}</strong>`;
    }

    // Event listener for showing a new quote
    newQuoteButton.addEventListener('click', showRandomQuote);

    // Function to add a new quote without using createElement or appendChild
    window.AddQuoteForm = function() {
        const newQuoteText = document.getElementById('newQuoteText').value.trim();
        const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();
        if (newQuoteText && newQuoteCategory) {
            quotes.push({ text: newQuoteText, category: newQuoteCategory });
            alert("Quote added successfully!");

            // Update the innerHTML of the quoteDisplay with the new quote
            quoteDisplay.innerHTML += `<p>"${newQuoteText}" - <strong>${newQuoteCategory}</strong></p>`;
        } else {
            alert("Please enter both a quote and a category.");
        }
    }

    // Show an initial random quote
    showRandomQuote();
});
