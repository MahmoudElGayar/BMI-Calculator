// Create calcBMI Function
function calcBMI(weight, height) {
	let bmiResult = 0;
	let myHeight = (height / 100) * (height / 100);
	bmiResult = weight / myHeight;
	return Math.floor(bmiResult);
}

let submitBtn = document.querySelector(".form div");
let resultSpan = document.querySelector(".result-span");
let bmiSituationDiv = document.querySelector(".situation");
let resultDiv = document.querySelector(".result");
window.onload = () => {
	document.querySelector("#weight").value = "";
	document.querySelector("#height").value = "";
};

let isErrorActive = false;
submitBtn.addEventListener("click", function () {
	let weight = Number(document.getElementById("weight").value);
	let height = Number(document.getElementById("height").value);
	if (
		document.getElementById("height").value !== "" &&
		document.getElementById("weight").value !== "" &&
		document.getElementById("age").value !== ""
	) {
		let bmiResult = calcBMI(weight, height);
		let bmiSituation = "";
		if (bmiResult >= 18.5 && bmiResult <= 25) {
			bmiSituation = "Normal";
		} else if (bmiResult >= 25 && bmiResult <= 30) {
			bmiSituation = "Overweight";
		} else if (bmiResult >= 40) {
			bmiSituation = "Severe";
		}

		if (bmiSituation === "Normal") {
			resultDiv.classList.add("bg-success");
		} else if (bmiSituation === "Overweight") {
			resultDiv.classList.add("bg-warning");
		} else if (bmiSituation === "Severe") {
			resultDiv.classList.add("bg-danger");
		} else {
			resultDiv.classList.add("bg-primary");
		}

		resultDiv.classList.replace("d-none", "d-block");
		resultSpan.innerText = bmiResult;
		bmiSituationDiv.innerText = bmiSituation;
	} else {
		if (isErrorActive === false) {
			// Create DOM Node Elements
			let errorDiv = document.createElement("div");
			let cancelBtn = document.createElement("div");
			let xIcon = document.createElement("i");
			isErrorActive = true;
			// Give The Bootstrap Classes
			errorDiv.classList.add(
				"alert-danger",
				"d-flex",
				"justify-content-between",
				"align-items-center",
				"p-2",
				"font-weight-bold"
			);
			cancelBtn.classList.add("btn", "btn-dark");
			xIcon.classList.add("fas", "fa-xmark");

			//Add Event To Cancel Button
			cancelBtn.addEventListener("click", () => {
				cancelBtn.parentElement.remove();
				isErrorActive = false;
			});

			//Append Them To Parent Div Then To Body Tag
			errorDiv.appendChild(
				document.createTextNode("Invalid Body Measurements !")
			);
			errorDiv.appendChild(cancelBtn);
			cancelBtn.appendChild(xIcon);
			document.body.prepend(errorDiv);
		} else {
			return false;
		}
	}
});
