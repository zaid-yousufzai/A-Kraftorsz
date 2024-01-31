// Document is ready
$(document).ready(function () {

	// Validate Username
	$("#usercheck").hide();
	let usernameError = false;

	// Function to validate the username
	function validateUsername() {
		let usernameValue = $("#usernames").val().trim(); // Trim the input value to remove leading and trailing whitespaces

		// Check if the username is empty
		if (usernameValue.length === 0) {
			$("#usercheck").show();
			$("#usercheck").html("**Username cannot be empty");
			usernameError = true; // Set error flag to true
			return false;
		} 
        // Check if the username length is not between 3 and 10
        else if (usernameValue.length < 3 || usernameValue.length > 10) {
			$("#usercheck").show();
			$("#usercheck").html("**Length of username must be between 3 and 10");
			usernameError = true; // Set error flag to true
			return false;
		} 
        // If the username is valid
        else {
			$("#usercheck").hide();
			usernameError = false; // Reset error flag to false
		}
	}

	// Event listener for the keyup event on the username input
	$("#usernames").keyup(function () {
		validateUsername();
	});

	// Event listener for the form submission
	$("#submitbtn").click(function () {
		// Validate the username
		validateUsername();

		// Check if there are any errors
		if (usernameError) {
			return false; // Prevent form submission
		} else {
            alert("hi");
			return true; // Allow form submission
		}
	});
});
