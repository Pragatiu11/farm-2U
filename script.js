document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login process (you can replace this with real authentication logic)
    if (username && password) {
        // Hide the login form and show the success message and options
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('loginMessage').style.display = 'block';
        document.getElementById('userOptions').style.display = 'block';
    } else {
        alert("Please enter a valid username and password.");
    }
});
