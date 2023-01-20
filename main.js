const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-card');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');


/*
navEmail.addEventListener('click', toggleDesktopMenu);

 function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
} 
*/

navEmail.addEventListener('click', () => {

    const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');

    if(!isshoppingCardContainerClosed){
        shoppingCardContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

    desktopMenu.classList.toggle('inactive');
});

burguerMenu.addEventListener('click', () => {
    /* Si el carrito de compras está abierto se necesita que se cierre para poder mostrar
    el menú mobile sin problemas asi que lo que se hace es crear un variable en la que se demuestre si la clase inactive está añadida o no
    en caso de que si esté añadida significa que el carrito está desaparecido por lo que podremos mostrar el menú sin problemas,
    caso contrario si el carrito está abierto, por lo cual si queremos ver ell menú tenemos que añadir la clase inactive */

    const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');

    if(!isshoppingCardContainerClosed){
        shoppingCardContainer.classList.add('inactive');
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

    shoppingCardContainer.classList.toggle('inactive');
});

const productsList = [];

productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsList.push({
    name: 'Computadora',
    price: 12000,
    image: 'https://images.pexels.com/photos/3042508/pexels-photo-3042508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsList.push({
    name: 'Silla',
    price: 20,
    image: 'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg'
});

productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsList.push({
    name: 'Computadora',
    price: 12000,
    image: 'https://images.pexels.com/photos/3042508/pexels-photo-3042508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsList.push({
    name: 'Silla',
    price: 20,
    image: 'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg'
});




function renderProducts(arr){
    for (product of arr){
        const productCard = `<div class="product-card">
                    <img src="${product.image}" alt="">
                    <div class="product-info">
                        <div>
                            <p> $ ${product.price}</p>
                            <p>${product.name}</p>        
                        </div>
                        <figure>
                            <img src="./Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="">
                        </figure>
                    </div>
                </div>`;
        
        cardsContainer.innerHTML += productCard;
        /* const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const imgCarrito = document.createElement('img');
        imgCarrito.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
    
        //Insertar los elementos hios dentro de los elementos padres
    
        productInfoFigure.appendChild(imgCarrito);
    
        productInfoDiv.append(productPrice, productName);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard) */
    
    }
}
renderProducts(productsList);
                   

