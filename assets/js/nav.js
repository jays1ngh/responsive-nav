const navSlide = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector(".header-links");
    const navLinks = document.querySelectorAll(".header-links li");
    // Toggle header-links-active class
    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('header-links-active');

    // burger-menu Animation
    burgerMenu.classList.toggle("cross-burger-menu");

    });  
    
}

navSlide();