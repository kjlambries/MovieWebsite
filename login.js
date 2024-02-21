function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error", "form--hidden");
    messageElement.classList.add(`form__message--${type}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#Login");
    const all_buttons = document.querySelectorAll('.btn');
    let clickedButton = ""; 
    
    all_buttons.forEach(bt => {
        bt.addEventListener('mousedown', (a) => {
            clickedButton = a.target.innerHTML;
            console.log(clickedButton);
            if(clickedButton == "Login") {
                console.log("Successful login detection");
            } else {
                console.log("Successful Signup detection");
            }
        });
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Special Characters
        let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,<>\/?~ ]/;

        let numbers =/[0123456789]/;

        // Info Search, AJAX/Fetch (will look into what those two terms mean)
        var username = document.getElementById("user").value;
        // Check if Username has at least 4 letters and exactly 1 underscore
        if (username.length >= 4 && username.split("_").length === 2) {
            // Username meets the criteria
            setFormMessage(loginForm, "success", "Username is valid.");
            // You can proceed with further actions here
        } else {
            // Username does not meet the criteria
            setFormMessage(loginForm, "error", "Invalid username. Please make sure it has at least 4 letters and exactly 1 underscore.");
            // Add counter (WIP)
        }

        // Info Search, AJAX/Fetch (will look into what those two terms mean)
        var password = document.getElementById("pass").value;
        // Check if Username has at least 4 letters and exactly 1 underscore
        if (password.length >= 8 && password.test(specialChars).length  && password.test(numbers).length === 3) {
            // Username meets the criteria
            setFormMessage(loginForm, "success", "Password is valid.");
            // You can proceed with further actions here
        } else {
            // Username does not meet the criteria
            setFormMessage(loginForm, "error", "Invalid password. Please make sure it has at least 8 letters, 1 special character, and 1 number.");
            // Add counter (WIP)
        }
        console.log(all_buttons);
    });
});