let next = document.getElementById('nextBtn');
let prev = document.getElementById('prevBtn');
let word = document.getElementById('syllable');
let words = [];
words.push('МА', 'ПА', 'ВА', 'ГА', 'ДА', 'МЕ');
words.push('ПЕ', 'КУ', 'ТА','СА', 'СО', 'СИ');
words.push('МИ', 'ЛИ', 'ЛА', 'ЛО', 'ПУ', 'РФ');
words.push('СУ', 'ОТ', 'УТ', 'ФЕ', 'ХА', 'ЦА');
word.innerHTML = '!';

let i = -1;

let colorsArray = ['green', 'red', 'blue', 'chocolate', 'darkmagenta', 'magenta', 'darkorange'];
function getRand() {
  word.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

function showNextWord() {
  getRand();
  i++;
  if (i === (words.length)) {
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