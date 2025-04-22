// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  console.log('MyTailwindTheme loaded successfully');
  
  // Add mobile menu toggle functionality
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
