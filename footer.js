// footer.js

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.getElementById('footer-text');
    footerText.textContent = `© ${currentYear} Media List. All rights reserved.`;
});


//______________________________________________________________ //

// Sélection de l'élément du DOM pour afficher le compteur
const counterDisplay = document.getElementById('counter');

// Fonction pour mettre à jour l'affichage du compteur
function updateCounterDisplay(count) {
    counterDisplay.textContent = count;
}

// Fonction pour incrémenter le compteur de visites
function incrementVisitCounter() {
    let visitCount = localStorage.getItem('visitCount');
    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount, 10);
    }
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    updateCounterDisplay(visitCount);
}
incrementVisitCounter();
