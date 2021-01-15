let arr = [];
let ball = document.querySelector('.ball');
let timer = document.querySelector('#timer');

//timer
let secInTimer = 59;
timer.innerHTML = 'Осталось: 1 мин 00 сек';
let showTime = setInterval(function () {
    timer.innerHTML = 'Осталось: 0 мин ' + secInTimer + ' сек';
    if (secInTimer < 10 && secInTimer >= 0) {
        timer.innerHTML = 'Осталось: 0 мин 0' + secInTimer + ' сек';
    }
    secInTimer--;
}, 1000);

let newExample = {
    colorsArray: ['yellow', 'blueviolet', 'crimson', 'deeppink', 'green', 'lightcoral', 'blue', 'purple', 'brown'],
    input1: null,
    result1: null,
    input2: null,
    result2: null,
    button: null,
    x: null,
    y: null,
    e: null,
    f: null,
    elem: null,

    create: function (id) {

        this.elem = document.querySelector('#example' + id);
        let numFirst1 = this.elem.querySelector('.numFirst1');
        let numSecond1 = this.elem.querySelector('.numSecond1');
        this.input1 = this.elem.querySelector('.input1');
        let numFirst2 = this.elem.querySelector('.numFirst2');
        let numSecond2 = this.elem.querySelector('.numSecond2');
        this.input2 = this.elem.querySelector('.input2');
        this.result1 = this.elem.querySelector('.result1');
        this.result2 = this.elem.querySelector('.result2');
        let sign1 = this.elem.querySelector('.sign1');
        let sign2 = this.elem.querySelector('.sign2');
        this.button = document.querySelector('.button');

        //change place of input in 2nd column
        let valueOfInputSecond;
        if ((this.input2.id === 'inputSecond1') || (this.input2.id === 'inputSecond2')) {
            valueOfInputSecond = true;
        }

        let a = Math.trunc(Math.random() * 9);
        let b = Math.trunc(Math.random() * 9);
        let c = Math.trunc(Math.random() * 9);
        let d = Math.trunc(Math.random() * 9);

        if (a > b) {
            this.y = a;
            this.x = b;
        } else if (a < b) {
            this.x = a;
            this.y = b;
        } else {
            this.y = a + 2;
            this.x = b;
        }

        if (c > d) {
            this.f = c;
            this.e = d;
        } else if (c < d) {
            this.f = d;
            this.e = c;
        } else {
            this.f = c + 2;
            this.e = d;
        }

        let that = this;
        this.button.addEventListener('click', function () {
            that.showResult();
        });

        numFirst1.innerHTML = this.x;
        numSecond1.innerHTML = ' = ' + this.y;
        numFirst2.innerHTML = this.f;
        numSecond2.innerHTML = ' = ' + this.e;
        numFirst1.style.color = numSecond1.style.color = sign1.style.color = this.input1.style.color = this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
        numFirst2.style.color = numSecond2.style.color = sign2.style.color = this.input2.style.color = this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];

        arr.push([this.x, this.y, this.f, this.e, this.input1, this.input2, this.result1, this.result2, valueOfInputSecond]);
    },

    showResult: function () {
        let score = 0;
        clearInterval(showTime);
        clearInterval(stopExample);

        arr.forEach(function (el) {
            if ((+el[4].value === el[1] - el[0])) {
                el[6].innerHTML = '✓';
                el[6].style.color = 'lime';
                score += 1;
            } else {
                el[6].innerHTML = el[1] - el[0];
                el[6].style.color = 'red';
            }

            if (el[8] === true) {
                debugger
                if (+el[5].value === el[2] - el[3]) {
                    el[7].innerHTML = '✓';
                    el[7].style.color = 'lime';
                    score += 1;
                } else {
                    el[7].innerHTML = el[2] - el[3];
                    el[7].style.color = 'red';
                }
            } else {
                if (+el[5].value === el[2] + el[3]) {
                    el[7].innerHTML = '✓';
                    el[7].style.color = 'lime';
                    score += 1;
                } else {
                    el[7].innerHTML = el[2] + el[3];
                    el[7].style.color = 'red';
                }
            }
        })
        this.button.disabled = true;
        ball.innerHTML = 'Оценка: ' + score;
        setTimeout(() => location.reload(), 10000);
    }
}

let stopExample = setTimeout(() => newExample.showResult(), 60000);

function createPage() {
    newExample.create('1');
    newExample.create('2');
    newExample.create('3');
    newExample.create('4');
    newExample.create('5');
}

createPage();