const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $("#menu");
const box = $("#box");
const logos = [...$$(".logo")];
const bgContainers = [...$$(".bg-container")];
const icons = [...$$(".icon")];
const hoverBgs = [...$$(".hover-bg")];
const info = $("#info");
const code = $("#code");
const framework = $(".framework");
const art = $("#art");
const pages = [...$$(".page")];

let isChoosedOption = false;
let currentPage;

const handleMouseOver = (e) => {
	e.target.nextElementSibling.style.borderRadius = "100%";
	e.target.nextElementSibling.style.width =
		e.target.parentElement.childNodes[5].offsetHeight + "px";
	e.target.nextElementSibling.style.height =
		e.target.parentElement.childNodes[5].offsetHeight + "px";
	e.target.nextElementSibling.style.top =
		e.target.parentElement.childNodes[5].offsetHeight + "px";
	e.target.nextElementSibling.style.fontSize =
		parseInt(window.getComputedStyle(e.target.nextElementSibling).fontSize) /
			3 +
		"px";
};

const handleMouseOut = (e) => {
	e.target.nextElementSibling.style.borderRadius = "15px";
	e.target.nextElementSibling.style.width = "100%";
	e.target.nextElementSibling.style.height = "100%";
	e.target.nextElementSibling.style.fontSize = "60px";
	e.target.nextElementSibling.style.top = "0";
};

const handleLogoStyle = () => {
	logos.forEach((logo) => {
		logo.style.width = logo.offsetHeight + "px";
		logo.nextElementSibling.style.top = logo.offsetHeight * 1.5 + "px";
	});
};

const handleBoxStyle = () => {
	box.style.padding =
		parseInt(window.getComputedStyle(menu).paddingLeft) +
		menu.offsetHeight +
		"px";
};

const handleClickMenu = () => {
	box.classList.toggle("active");
	menu.classList.toggle("rotate");
	let checkedPage = pages.find((page) =>
		page.classList.contains("active-page")
	);
	currentPage = checkedPage ?? currentPage;
	currentPage.classList.toggle("active-page");
	handleLogoStyle();
	handleBoxStyle();
};

const handleClickOptions = (e) => {
	box.classList.toggle("active");
	menu.classList.toggle("rotate");
	let newCheckedPage = pages.find(
		(page) => page.id === `${e.target.parentElement.id}-page`
	);
	newCheckedPage.classList.toggle("active-page");
	isChoosedOption = true;
};

// render();

menu.addEventListener("click", handleClickMenu);
hoverBgs.forEach((hoverBg) => {
	hoverBg.addEventListener("mouseover", handleMouseOver);
	hoverBg.addEventListener("mouseout", handleMouseOut);
});
bgContainers.forEach((bgContainer) => {
	bgContainer.addEventListener("click", handleClickOptions);
});
