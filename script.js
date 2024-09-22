function validateForm() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

    let errorMessage = "";

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Invalid email format.\n";
    }

    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        errorMessage += "Phone number must be exactly 10 digits.\n";
    }

    // Validate password
    if (password.length < 8) {
        errorMessage += "Password must be at least 8 characters long.\n";
    }

    // Confirm password
    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
