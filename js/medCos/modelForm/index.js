import { location, cities, degree, special } from "./dictmodel.js";

console.log("special", special);

const formDataToBeSent = {
	exp: 0,
	loc: "",
	city: "",
	spec: "",
	deg: "",
};

const exp = document.getElementById("exp");

exp.addEventListener("change", (e) => {
	console.log("e", e.target.value);
	formDataToBeSent.exp = e.target.value;
});

const loc = document.getElementById("loc");
function createOption(value, content) {
	const option = document.createElement("option");
	option.value = value;
	option.innerText = content;
	return option;
}
loc.addEventListener("change", (e) => {
	console.log("e", e.target.value);
	formDataToBeSent.loc = e.target.value;
});

Object.keys(location).forEach((l) => {
	loc.appendChild(createOption(l, l));
});

const city = document.getElementById("city");

Object.keys(cities).forEach((c) => {
	city.appendChild(createOption(c, c));
});

city.addEventListener("change", (e) => {
	console.log("e", e.target.value);
	formDataToBeSent.city = e.target.value;
});

const spec = document.getElementById("spec");
Object.keys(special).forEach((s) => {
	spec.appendChild(createOption(s, s));
});
spec.addEventListener("change", (e) => {
	console.log("e", e.target.value);
	formDataToBeSent.spec = e.target.value;
});

const deg = document.getElementById("deg");
Object.keys(degree).forEach((d) => {
	deg.appendChild(createOption(d, d));
});
deg.addEventListener("change", (e) => {
	console.log("e", e.target.value);
	formDataToBeSent.deg = e.target.value;
});

const allFieldsAreFilled = () => {
	if (formDataToBeSent.exp === 0) return false;
	if (formDataToBeSent.loc === "") return false;
	if (formDataToBeSent.city === "") return false;
	if (formDataToBeSent.spec === "") return false;
	if (formDataToBeSent.deg === "") return false;
	return true;
};

const modelForm = document.getElementById("model-form");

const backendUrl = "http://127.0.0.1:5000/predict";

const predictedOutputH2 = document.getElementById("predictedOutput");

modelForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	console.log("e", e);
	console.log("e.target", e.target);
	console.log(formDataToBeSent);
	if (allFieldsAreFilled()) {
		const formData = new FormData();
		Object.keys(formDataToBeSent).forEach((key) => {
			formData.append(key, formDataToBeSent[key]);
		});
		// make a post request to the backend with the form data
		await fetch(backendUrl, {
			method: "POST",
			body: formData,
		})
			.then((res) => {
				console.log("res", res);
				return res.json();
			})
			.then((data) => {
				console.log("data", data);
				predictedOutputH2.innerText = `Predicted Consultation Fee: ₹${(+data).toFixed(
					2
				)}`;
			});
	} else {
		alert("Please fill all the fields");
	}
});
