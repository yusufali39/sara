// Define all UI variables
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// Load all event listeners
allEventListeners();

// Functions for all event listeners
function allEventListeners() {
  // Toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // Nav links click event
  navLinks.forEach(elem => elem.addEventListener('click', navLinkClick))

  // Get all "Add to Cart" buttons and add click event listeners
  const addToCartButtons = document.querySelectorAll('.product button[id="addToCart"]');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartClick);
  });
}

// TogglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// NavLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

const cartBtn = document.getElementById('cart_btn');
const cart = [];

let cartItems = 0;

function addToCartClick() {
  // Add the item to the cart array
  const product = this.closest('.product');
  const item = {
    name: product.querySelector('h2').textContent,
    price: parseFloat(product.querySelector('p').textContent.split('₹').price)
  };
  cart.push(item);

  cartItems++;
  updateCartIcon(cartItems);
  displayAddedToCartMessage();

  updateCart(); // Update the cart display
}

function updateCartIcon(itemCount) {
  cartBtn.innerHTML = `<span>${itemCount}</span>`;
}

function displayAddedToCartMessage() {
  const addedToCartButton = document.getElementById('addToCart');
  addedToCartButton.innerText = 'Add to cart';

  setTimeout(() => {
    addedToCartButton.innerText = 'Add to Cart';
  }, 3000);
  // alert("added to cart")
}

function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let total = 0;

  cartItemsList.innerHTML = ''; // Clear the cart items

  cart.forEach(item => {
    total += item.price;
    cartItemsList.innerHTML += `<li>${item.name} - ₹${item.price.toFixed(2)}</li>`;
  });

  cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
}

