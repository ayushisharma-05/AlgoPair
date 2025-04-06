const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
});
