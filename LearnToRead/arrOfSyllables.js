let sector = document.getElementsByTagName('th');

for (const el of sector) {
  el.addEventListener('click', () => el.style.backgroundColor = 'green');
}