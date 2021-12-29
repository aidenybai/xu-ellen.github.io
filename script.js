const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
	navbar.classList.toggle("change");
});

const pic = document.querySelector(".pic");
const col = document.querySelector(".col");
const flip = document.querySelector(".flip");

pic.addEventListener("click", () => {
	col.classList.toggle("change");
	pic.classList.toggle("no-hover");
});
