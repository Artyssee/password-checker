'use strict'

let form = document.querySelector('.form');
let password = document.querySelector('.password');
let submitbutton = document.querySelector('.form-button');

const FORMTEST = {
	minCharacters: 8,
	specialsign: RegExp(/[{}.,!#:]/),
	numbers: RegExp(/([0-9])\w{1}/),
	capitals: RegExp(/[A-Z]/),
	noncapitals: RegExp(/[a-z]/),
};


form.addEventListener('submit', function( event ) {
	event.preventDefault();
	let passwordInput = password.value;
	checkForm(passwordInput);
});

function checkForm(passwordInput) {
	console.log(passwordInput);
	if(
		passwordInput.length > FORMTEST.minCharacters &&
		FORMTEST.specialsign.test(passwordInput) &&
		FORMTEST.numbers.test(passwordInput) &&
		FORMTEST.capitals.test(passwordInput) &&
		FORMTEST.noncapitals.test(passwordInput)
	) {
		console.log('CONGRATULATIONS U PASSED');
	} else {
		console.log('PASSWORD NOT ACCEPTED');
		return false;
	};
}
