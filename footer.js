// footer.js

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.getElementById('footer-text');
    footerText.textContent = `© ${currentYear} Media List. All rights reserved.`;
});
