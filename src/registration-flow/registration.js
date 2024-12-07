// JavaScript to handle splash page transition
window.onload = function () {
    setTimeout(() => {
        // Hide splash page
        document.getElementById('splash').classList.add('hidden');
        
        // Show onboarding flow starting with Page 1
        document.getElementById('onboarding').classList.remove('hidden');
    }, 3000); // Wait for 3 seconds
};

// Function to navigate between pages
function goToPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });

    // Show the target page
    document.getElementById(`page${pageNumber}`).classList.remove('hidden');
}

function goToHome() {
    // Hide onboarding
    document.getElementById('onboarding').classList.add('hidden');

    // Show home page
    document.getElementById('home').classList.remove('hidden');
}
