// Wait for intro animation to finish, then show main content
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.body.style.overflow = 'auto';
  }, 3500); // total animation time
});
