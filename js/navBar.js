const btnBurger = document.querySelector('.btnBurger');
const body = document.querySelector('body');

btnBurger.addEventListener("click" , () => {
    body.classList.toggle('activeToggle');
} );