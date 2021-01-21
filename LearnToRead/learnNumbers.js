let next = document.getElementById('nextBtn');
let prev = document.getElementById('prevBtn');
let number = document.getElementById('number');
let words = [];
words.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

let colorsArray = ['green', 'red', 'blue', 'chocolate', 'darkmagenta', 'magenta', 'darkorange'];
function getRand() {
  number.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

number.innerHTML = 0;
let i = 0;

function showNextWord() {
  getRand();
  i++;
  if (i === (words.length)) {
    i = 0
  }
  number.innerHTML = words[i];
}

function showPrevWord() {
  getRand();
  i--;
  if (i === -1) {
    i = words.length - 1;
  }
  number.innerHTML = words[i];
}

next.addEventListener('click', showNextWord);
prev.addEventListener('click', showPrevWord);