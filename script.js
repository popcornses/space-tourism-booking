// Add your JavaScript code here
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('active');
    link.querySelector('.submenu').style.display = 'block';
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('active');
    link.querySelector('.submenu').style.display = 'none';
  });
});
