const menuHamburger = document.querySelector('.menu-hamburger');
const navbarMenu = document.querySelector('.menu');
const outsideMenu = document.querySelector('.outside-menu');


// Open and Close navbarMenu by clik on menuHambuerger
// Open and Close navbarMenu by Click Outside
menuHamburger.addEventListener('click', toggleMenu);
outsideMenu.addEventListener('click', toggleMenu);

// Toggle Menu Function
function toggleMenu() {
   
    navbarMenu.classList.toggle('active');
    outsideMenu.classList.toggle('active');
    document.body.classList.toggle('scrolling');
    
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