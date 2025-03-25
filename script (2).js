document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("error-message").innerHTML = "Please fill in both username and password.";
    } else {
        // Here you would typically send a request to the server to verify the credentials
        // For this example, we'll just pretend the credentials are correct
        alert("Login successful!");
    }
});