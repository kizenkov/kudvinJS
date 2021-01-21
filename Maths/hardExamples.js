let start = new Date();
let arr = [];

let newExample = {
    colorsArray: ['yellow', 'blueviolet', 'deeppink', 'green', 'lightcoral', 'blue', 'purple', 'brown'],
    input1: null,
    result1: null,
    input2: null,
    result2: null,
    a: null,
    b: null,
    e: null,
    f: null,

    create: function (id) {
        this.a = Math.trunc(Math.random() * 13 + 8);
        this.b = Math.trunc(Math.random() * 13 + 8);
        let c = Math.trunc(Math.random() * 11 + 8);
        let d = Math.trunc(Math.random() * 11 + 8);

        if (c > d) {
            this.f = c;
            this.e = d;
        } else if (c < d) {
            this.f = d;
            this.e = c;
        } else {
            this.f = c + 3;
            this.e = d;
        }

        let el = document.querySelector('#example' + id);
        let num1 = el.querySelector('.num1');
        this.input1 = el.querySelector('.input1');
        let num2 = el.querySelector('.num2');
        this.input2 = el.querySelector('.input2');
        this.result1 = el.querySelector('.result1');
        this.result2 = el.querySelector('.result2');

        num1.innerHTML = this.a + ' + ' + this.b + ' = ';
        num2.innerHTML = this.f + ' - ' + this.e + ' = ';
        num1.style.color = this.input1.style.color = this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
        num2.style.color = this.input2.style.color = this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];

        arr.push([this.a, this.b, this.f, this.e, this.input1, this.input2, this.result1, this.result2]);
    }
}

let button = document.querySelector('.button');
let result = document.querySelector('.result');
let time = document.querySelector('.time');

button.addEventListener('click', showResult);

function showResult() {
    let score = 0;
    let end = new Date();
    let min = Math.trunc(Math.round((end - start) / 1000)/60);
    let seconds = Math.round((end - start) / 1000) - min*60;

    arr.forEach(function (el) {
        if ((+el[4].value === el[0] + el[1])) {
            el[6].innerHTML = '✓';
            el[6].style.color = 'lime';
            score += 1;
        } else {
            el[6].innerHTML = +el[0] + +el[1];
            el[6].style.color = 'red';
        }
        if ((+el[5].value === el[2] - el[3])) {
            el[7].innerHTML = '✓';
            el[7].style.color = 'lime';
            score += 1;
        } else {
            el[7].innerHTML = +el[2] - +el[3];
            el[7].style.color = 'red';
        }
    })

    button.disabled = true;
    result.innerHTML = 'Оценка: ' + score;
    time.innerHTML = 'Затрачено времени: ' + min + ' мин ' + seconds + ' сек';
    setTimeout(() => location.reload(), 10000);
}

newExample.create('1');
newExample.create('2');
newExample.create('3');
newExample.create('4');
newExample.create('5');