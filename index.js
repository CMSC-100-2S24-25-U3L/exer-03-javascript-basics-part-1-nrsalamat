// Nathaniel R. Salamat

function validatePassword(password, validation) {
	let upperFound = 0;
	let lowerFound = 0;
	let numberFound = 0;

	if (password == validation) {
		//Check if the passwords match
		for (i = 0; i < password.length; i++) {
			// console.log(password[i]);
			// console.log(typeof(password[i]));
			// console.log(typeof(1));

			if (!(password[i].toUpperCase() != password[i].toLowerCase())) {
				//Check if number (numbers do not have a lowercase and uppercase counterpart unlike letters)
				numberFound++;
			} else if (password[i] == password[i].toUpperCase()) {
				//Check if uppercase letter
				upperFound++;
			} else if (password[i] == password[i].toLowerCase()) {
				//Check if lowercase letter
				lowerFound++;
			} //if-else statement
		} //for loop

		// console.log(upperFound);
		// console.log(lowerFound);
		// console.log(numberFound);

		if (upperFound == 0 || lowerFound == 0 || numberFound == 0) {
			// No uppercase letter, lowercase letter, or number was found after the loop
			return false;
		} //if statement

		return true;
	} else {
		return false;
	} //if-else statement
} //validatePassword()



function reversePassword(password) {
	let passwordReversed = "";

	for (i = password.length - 1; i >= 0; i--) {
		// console.log(password[i]);
		passwordReversed += password[i];
	} //for loop

	return passwordReversed;
} //reversePassword()



function storePassword(name, password, password2) {
	const user = {
		name: name,
		newPassword: null,
	} //user

	if (validatePassword(password, password2)) {
		user.newPassword = reversePassword(password);
	} else {
		user.newPassword = password;
	} //if-else statement

	return user;
} //storePassword()

// console.log(validatePassword("helloworld", "hello"));
// console.log(validatePassword("hello", "hello"));
// console.log(validatePassword("hello1234", "hello1234"));
// console.log(validatePassword("Hello1234", "Hello1234"));
// console.log(validatePassword("HELLO1234", "HELLO1234"));
// console.log(validatePassword("1", "1"));

// console.log(reversePassword("hello"));

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));