document.querySelector("form").addEventListener("submit", function(event) {
    // Get form elements
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm_password");
    let passwordError = document.getElementById("passwordError");
    let email = document.getElementById("email");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    // Reset error messages
    passwordError.style.display = "none";

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        event.preventDefault(); // Prevent form submission
        passwordError.textContent = "Passwords do not match. Please try again.";
        passwordError.style.display = "block";
        password.value = "";
        confirmPassword.value = "";
        password.focus();
        return;
    }

    // Validate email pattern
    if (!emailPattern.test(email.value)) {
        event.preventDefault();
        alert("Please enter a valid @byui.edu email address.");
        email.focus();
        return;
    }
});
