const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

sr.reveal('.home-text', { delay: 300 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.container', { delay: 400 });
sr.reveal('.about-img', {});
sr.reveal('.about-text', { delay: 300 });
sr.reveal('.middle-text', {});
sr.reveal('.row-btn,.shop-content', { delay: 300 });
sr.reveal('.review-content,.contact', { delay: 300 });

document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const goToCartBtn = document.getElementById('go-to-cart');

    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');

            const existingProduct = cart.find(product => product.id === id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                const product = { id, name, price, image, quantity: 1 };
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Cart:', cart);

            popupMessage.textContent = `${name} has been added to the cart!`;
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    continueShoppingBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    goToCartBtn.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('#search-icon');
    const searchBar = document.querySelector('#search-bar');
    const searchClose = document.querySelector('#search-close');

    searchIcon.onclick = (event) => {
        event.preventDefault();
        searchBar.style.display = 'flex';
    };

    searchClose.onclick = () => {
        searchBar.style.display = 'none';
    };

    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBar.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const goToCartBtn = document.getElementById('go-to-cart');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');
            
            const product = { id, name, price, image, quantity: 1 };

            addToCart(product);
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    continueShoppingBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    goToCartBtn.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });

    function addToCart(product) {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        popupMessage.textContent = `${product.name} has been added to the cart!`;
        popup.style.display = 'flex';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const goToCartBtn = document.getElementById('go-to-cart');
    const cartCount = document.getElementById('cart-count');

    const updateCartCount = () => {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    };

    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');
            
            const product = { id, name, price, image, quantity: 1 };

            addToCart(product);
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    continueShoppingBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    goToCartBtn.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });

    function addToCart(product) {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();

        popupMessage.textContent = `${product.name} has been added to the cart!`;
        popup.style.display = 'flex';
    }

  
    updateCartCount();
});
