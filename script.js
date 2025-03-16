function clearErrors() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function setError(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    let returnval = true;
    clearErrors();

    // Name Validation
    let name = document.forms['myForm']["fname"].value;
    if (name.length < 3) {
        setError("name", "*Name must be at least 3 characters long");
        returnval = false;
    }

    // Email Validation (Correct Format)
    let email = document.forms['myForm']["femail"].value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        setError("email", "*Enter a valid email address");
        returnval = false;
    }

    // Phone Validation (10 Digits)
    let phone = document.forms['myForm']["fphone"].value;
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        setError("phone", "*Phone number must be exactly 10 digits");
        returnval = false;
    }

    // Password Validation (At least 6 characters, 1 uppercase, 1 number, 1 special character)
    let password = document.forms['myForm']["fpass"].value;
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
        setError("pass", "*Password must have at least 6 characters, 1 uppercase, 1 number, and 1 special character");
        returnval = false;
    }

    // Confirm Password Validation
    let cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword !== password) {
        setError("cpass", "*Passwords do not match");
        returnval = false;
    }

    // If validation passes, store name & redirect to home page
    if (returnval) {
        localStorage.setItem("username", name); // Store name
        window.location.href = "home.html"; // Redirect
    }

    return false; // Prevent form submission
}
