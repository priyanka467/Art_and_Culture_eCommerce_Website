// Function to navigate to the second page
function goToSecondPage() {
    // Hide the first page and show the second page
    document.getElementById("onboarding-page").classList.add("hidden");
    document.getElementById("second-page").classList.remove("hidden");
}

// Function to navigate to the third page
function goToThirdPage() {
    // Here you can add logic for phone number validation if needed
    document.getElementById("second-page").classList.add("hidden");
    document.getElementById("third-page").classList.remove("hidden");
}

// Function to navigate to the fourth page
function goToFourthPage() {
    // Here you can add logic for OTP verification if needed
    document.getElementById("third-page").classList.add("hidden");
    document.getElementById("fourth-page").classList.remove("hidden");
}

// Function to navigate to the home page
function goToHomePage() {
    // Get the user information from the fields
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    // Here you can add logic to save the user's data (e.g., to a server or localStorage)

    // Once the user is done, hide the onboarding and show the home page
    document.getElementById("fourth-page").classList.add("hidden");
    document.getElementById("onboarding-page").classList.add("hidden");

    // Navigate to the home page (home.html)
    window.location.href = "homepage.html";  // Replace with your actual home page file path
}
