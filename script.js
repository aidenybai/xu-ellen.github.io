import { router } from 'https://unpkg.com/million@1.8.9-0/dist/router.mjs';

router('body');

// Handles each navigation
window.addEventListener('million:navigate', () => {
  requestAnimationFrame(() => {
    const menuIcon = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('change');
    });

    const pics = document.querySelectorAll('.pic');
    const col = document.querySelectorAll('.col');

    function click(i) {
      col[i].classList.toggle('change');
      pics[i].classList.toggle('no-hover');
    }

    Array.prototype.forEach.call(pics, function (pic, index) {
      pic.addEventListener('click', function () {
        click(index + 1);
      });
    });
  });
});
