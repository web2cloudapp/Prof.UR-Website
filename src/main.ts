// Add active class to current navigation item
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  // Get all navigation links
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-menu a');

  // Loop through each link and check if it matches the current path
  for (const link of navLinks) {
    const href = link.getAttribute('href') || '';

    if (href === currentPath ||
        (currentPath === '/' && href === '/') ||
        (currentPath.includes(href) && href !== '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }
});
