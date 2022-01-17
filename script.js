const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
	navbar.classList.toggle("change");
});

// const pic = document.querySelector(".pic");
// const col = document.querySelector(".col");
// const flip = document.querySelector(".flip");

// pic.addEventListener("click", () => {
// 	col.classList.toggle("change");
// 	pic.classList.toggle("no-hover");
// });

const pics = document.querySelectorAll(".pic");
const col = document.querySelectorAll(".col");

function click(i) {
	col[i].classList.toggle("change");
	pics[i].classList.toggle("no-hover");
}

// for (var i = 0; i < pics.length; i++) {
// 	pics[i].addEventListener("click", function () {
// 		myfunction(i);
// 	});
// }

Array.prototype.forEach.call(pics, function (pic, index) {
	pic.addEventListener("click", function () {
		click(index + 1);
		// console.log(index + 1);
	});
});
