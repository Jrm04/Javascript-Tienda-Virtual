const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-card');
const aside = document.querySelector('.product-detail');

/*
navEmail.addEventListener('click', toggleDesktopMenu);

 function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
} 
*/

navEmail.addEventListener('click', () => {

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

    desktopMenu.classList.toggle('inactive');
});

burguerMenu.addEventListener('click', () => {
    /* Si el carrito de compras está abierto se necesita que se cierre para poder mostrar
    el menú mobile sin problemas asi que lo que se hace es crear un variable en la que se demuestre si la clase inactive está añadida o no
    en caso de que si esté añadida significa que el carrito está desaparecido por lo que podremos mostrar el menú sin problemas,
    caso contrario si el carrito está abierto, por lo cual si queremos ver ell menú tenemos que añadir la clase inactive */

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
});

carrito.addEventListener('click', () => {
/* En este caso pasa lo contrario, ya que necesitamos saber si el menú esta abierto o no,
si está cerrado (es decir, si tiene la clase inactive activada) entonces se puede abrir el carrito sin porblemas,
caso contrario si el menú está abierto (clase inactive desactivada) en ese caso necesitamos activar esa funcion para que se cierre el 
menú y podamos ver el carrito
*/

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDeskptoMenuClose = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    if(!isDeskptoMenuClose){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
});

