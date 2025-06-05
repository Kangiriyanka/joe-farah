const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('expanded');
  
  // Remove current animation classes
  navLinks.classList.remove('fade-in', 'fade-out');

  if (isOpen) {

    hamburger.classList.remove('active');
    // Fade out, then remove expanded + link styles
    navLinks.classList.add('fade-out');

    navLinks.addEventListener('animationend', function handleFadeOut() {
      navLinks.classList.remove('expanded', 'fade-out');
      document.querySelectorAll('.nav-links .nav-link')?.forEach(link =>
        link.classList.remove('nav-link-container')
      );
      navLinks.removeEventListener('animationend', handleFadeOut);
    });
  } else {

    hamburger.classList.add('active');
    // Prepare nav links and fade in
    navLinks.classList.add('expanded', 'fade-in');
    document.querySelectorAll('.nav-links .nav-link')?.forEach(link =>
      link.classList.add('nav-link-container')
    );
  }
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 636) {
    navLinks.classList.remove('expanded', 'fade-in', 'fade-out');
    hamburger.classList.remove('active');

    document.querySelectorAll('.nav-links .nav-link')?.forEach(link => {
      link.classList.remove('nav-link-container');
    });
  }
});