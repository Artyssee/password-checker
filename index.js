'use strict'

let password = document.querySelector('.password');
let passwordInput;

password.addEventListener('input', function() {
	let passwordInput = password.value;
	let passwordLength = passwordInput.length;

	switch ( true ) {
		case passwordLength < 11:
			console.log('Min. 8 characters');
			break;
	
		default:
			console.log(passwordLength);
			break;
	}
});



