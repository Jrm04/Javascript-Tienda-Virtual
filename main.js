const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/*
navEmail.addEventListener('click', toggleDesktopMenu);

 function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
} 
*/

navEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

burguerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
});

