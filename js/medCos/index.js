document.getElementById("read_more_about").addEventListener("click", (e) => {
	const para = document.getElementById("more_details");
	const paraText = para.innerText;
	if (paraText.length > 0) {
		para.innerText = "";
		e.target.innerText = "Read More";
	} else {
		console.log(para);
		para.innerText =
			"At its core, MedCos is designed to make the process of visiting a doctor more transparent and affordable for patients. By using advanced predictive modeling techniques, the system is able to accurately estimate the cost of medical consultations based on a range of different factors, including the type of consultation, the doctor's credentials, and the patient's medical";
		e.target.innerText = "Collapse";
	}
});
