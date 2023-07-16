const teamMates = {
	pranav: {
		image: "../../images/teamMates/pranav.png",
		role: "Project Manager | ML Engineer",
		about:
			"A curious and aspiring data scientist, keen to learn new things and apply them to solve real world problems. A quick learner and a team player. Passionate about data science and machine learning and always looking for opportunities to learn and grow.",
	},
	lokesh: {
		image: "../../images/teamMates/lokesh.png",
		role: "Data Engineer",
		about:
			"Always curious about data and how it can be used to solve real world problems. A quick learner and a team player. Passionate about data science and machine learning and always looking for opportunities to learn and grow.",
	},
	anshika: {
		image: "../../images/teamMates/anshika.png",
		role: "web scraping specialist",
		about:
			"Solving problems fuels my passion. I love to learn new things and apply them to solve real world problems. A quick learner and a team player. Passionate about data science and machine learning and always looking for opportunities to learn and grow.",
	},
	akash: {
		image: "../../images/teamMates/akash.png",
		role: "ML Engineer | Backend Developer",
		about:
			"Backend developer with a passion for data science and machine learning. Always looking for opportunities to learn and grow. A quick learner and a team player. Passionate about data science and machine learning and always looking for opportunities to learn and grow.",
	},
};

const teamMatesButton = document.querySelectorAll(
	"#content > div.choose > div.choose_bg > div > div > div > div > div.col-xl-3.col-lg-3.col-md-3.col-sm-12.padding_right0 > ul > li"
);

const imageDiv = document.getElementById("teamMateImage");
const nameTag = document.getElementById("teamMateName");
const roleTag = document.getElementById("teamMateRole");
const aboutTag = document.getElementById("teamMateAbout");

teamMatesButton.forEach((btn) => {
	btn.addEventListener("click", (ev) => {
		console.log(teamMates[btn.innerText.toLowerCase()].image);
		document
			.querySelector(
				"#content > div.choose > div.choose_bg > div > div > div > div > div.col-xl-3.col-lg-3.col-md-3.col-sm-12.padding_right0 > ul > li.active"
			)
			.classList.remove("active");
		btn.classList.add("active");
		imageDiv.src = teamMates[btn.innerText.toLowerCase()].image;
		nameTag.innerText = btn.innerText;
		roleTag.innerText = teamMates[btn.innerText.toLowerCase()].role;
		aboutTag.innerText = teamMates[btn.innerText.toLowerCase()].about;
	});
});
