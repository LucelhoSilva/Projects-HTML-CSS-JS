function toggleMode() {
  const html = document.querySelector('html');
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    img.src = '../assets/img/avatar-light.png';
    img.alt = 'Avatar light';
  }
  else {
    img.src = '../assets/img/avatar.png';
    img.alt = 'Avatar';
  }

}