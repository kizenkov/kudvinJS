let next = document.getElementById('nextBtn');
let prev = document.getElementById('prevBtn');
let word = document.getElementById('word');
let words = [];
words.push('А', 'Б', 'В', 'Г', 'Д', 'Е');
words.push('Ё', 'Ж', 'З','И', 'Й', 'К');
words.push('Л', 'М', 'Н', 'О', 'П', 'Р');
words.push('С', 'Т', 'У', 'Ф', 'Х', 'Ц');
words.push('Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь');
words.push('Э', 'Ю', 'Я');
word.innerHTML = '!';

let changeLetters = document.querySelectorAll('.changeLettersButton');

changeLetters.forEach(el => el.addEventListener('click', function () {
  next.disabled = false;
  prev.disabled = false;
  for (let j = 0; j < changeLetters.length; j++) {
    if (el.innerHTML === words[j])
      words.splice(j, 1);
  }
  el.disabled = true;
}));

let i = -1;

let colorsArray = ['green', 'red', 'blue', 'chocolate', 'darkmagenta', 'magenta', 'darkorange'];
function getRand() {
  word.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

function showNextWord() {
  getRand();
  i++;
  if (i >= (words.length)) {
    i = 0
  }
  word.innerHTML = words[i];
}

function showPrevWord() {
  getRand();
  i--;
  if (i === -1 || i === -2) {
    i = words.length - 1;
  }
  word.innerHTML = words[i];
}

next.addEventListener('click', showNextWord);
prev.addEventListener('click', showPrevWord);