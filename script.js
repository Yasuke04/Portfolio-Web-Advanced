// Elementen selecteren en manipuleren
const featuredReviewsSection = document.getElementById('featured-reviews');
const pageTitle = document.querySelector('h1');

// Functie om de titel te manipuleren met een template literal
const updateTitle = (newTitle) => {
    pageTitle.textContent = `Latest Review: ${newTitle}`;
};

// Functie om reviews dynamisch te renderen met destructuring en template literals
const renderReviews = (...reviewList) => {
    featuredReviewsSection.innerHTML = ''; // Bestaande reviews wissen
    reviewList.forEach((review) => {
        const { title, image, content } = review; // Destructuring
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <h2>${title}</h2>
            <img src="${image}" alt="${title}" loading="lazy">
            <p>${content}</p>
        `;
        featuredReviewsSection.appendChild(reviewCard);
    });
};

// Event koppelen aan een element (Event linking to an element)
document.addEventListener('DOMContentLoaded', () => {
    renderReviews(...reviews);
    initializeFormValidation();
    fetchGameData();
    animateTitle();
});


// Voorbeeld van Elementen manipuleren (Manipulating elements)
updateTitle(reviews[0].title);

// Async functie om game data op te halen met Fetch API en JSON manipulatie
async function fetchGameData() {
    try {
        const response = await fetch('api/games');
        const games = await response.json();
        // Verwerk de opgehaalde game data
        console.log(games);
        // Roep hier de renderReviews functie aan met de nieuwe data
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

// Functie om form validatie te initialiseren (placeholder voor validatie logica)
async function initializeFormValidation() {
    // Formulier validatie logica hier
}

// Functie om de titel te animeren (placeholder voor animatie logica)
function animateTitle() {
    // CSS Animatie logica hier
}
