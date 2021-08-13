const menuHamburger = document.querySelector('.menu-hamburger');
/*const closedMenu = document.querySelector('.closed-menu');*/
const navbarMenu = document.querySelector('.menu');
/*const menuOverlay = document.querySelector('.overlay');*/

// Opened navbarMenu
// Closed navbarMenu
// Closed navbarMenu by Click Outside
menuHamburger.addEventListener('click', toggleMenu);
/*closedMenu.addEventListener('click', toggleMenu);*/
/*menuOverlay.addEventListener('click', toggleMenu);*/

// Toggle Menu Function
function toggleMenu() {
    if (navbarMenu.classList.contains('active')) {        
        navbarMenu.classList.toggle('active');
    }
    /*menuOverlay.classList.toggle('active');*/
    else {
        navbarMenu.classList.toggle('active');
        document.body.classList.toggle('scrolling');
    }
    
    
}

// Fixed Resize Screen Function
function resizeScreen() {
   // If navbarMenu is Open, Close It
   if (navbarMenu.classList.contains('active')) {
      toggleMenu();
   }
  
}

window.addEventListener('resize', () => {
   if (this.innerWidth > 768) {
      resizeScreen();
   }
});