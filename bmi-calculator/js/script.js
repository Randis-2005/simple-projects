document.querySelector('#calculate--btn').addEventListener('click', calculation);

function calculation() {
	// Obtaining user inputs
	let name = document.querySelector('#name').value;
	let weight = document.querySelector('#weight').value;
	let heightcm = document.querySelector('#height').value;
	let status = document.querySelector('#status');

	// Validation 
	function validate() {
		if (isNaN(weight)) {
			status.innerHTML = new Error('Enter a valid number for weight');
		}
		if (isNaN(heightcm)) {
			status.innerHTML = new Error('Enter a valid number for height');
		}
	}

	validate();

	// Converting centimetres to metres
	let heightm = heightcm / 100; 

	// Formula
	let bmi = weight / Math.pow(heightm, 2);


	// Checking conditions
	function condition() {
		if (bmi < 18.5) {
			status.innerHTML = `<span>BMI Value: </span>` + bmi + `<div>Condition: Underweight</div>`;
		} 
		else if (bmi < 25) {
			status.innerHTML = `<span>BMI Value: </span>` + bmi + `<div>Condition: Normal</div>`;
		}
		else if (bmi < 30) {
			status.innerHTML = `<span>BMI Value: </span>` + bmi + `<div>Condition: Overweight</div>`;
		}
		else if (bmi >= 30) {
			status.innerHTML = `<span>BMI Value: </span>` + bmi + `<div>Condition: Obese</div>`;
		}
		else {
			status.innerHTML = new Error('Try Again!');
		}
	
	}


	// status.innerHTML = `<h2>BMI Value: <h2>` + bmi;
	condition();
}

