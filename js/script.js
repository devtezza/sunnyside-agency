const openedMenu = document.querySelector('.opened-menu');
const closedMenu = document.querySelector('.closed-menu');
const navbarMenu = document.querySelector('.navbar');
const menuOverlay = document.querySelector('.overlay');

// Opened navbarMenu
// Closed navbarMenu
// Closed navbarMenu by Click Outside
openedMenu.addEventListener('click', toggleMenu);
closedMenu.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Toggle Menu Function
function toggleMenu() {
   navbarMenu.classList.toggle('active');
   menuOverlay.classList.toggle('active');
   document.body.classList.toggle('scrolling');
}


// Fixed Resize Screen Function
function resizeScreen() {
   // If navbarMenu is Open, Close It
   if (navbarMenu.classList.contains('active')) {
      toggleMenu();
   }

   // If menuItemHasChildren is Expanded, Collapse It
   /*if (navbarMenu.querySelector('.menu-item-has-children.active')) {
      collapseSubMenu();
   }*/
}

window.addEventListener('resize', () => {
   if (this.innerWidth > 992) {
      resizeScreen();
   }
});