let arr = [];
let result = document.querySelector('.result');
let timer = document.querySelector('#timer');

let newExample = {
    colorsArray: ['deeppink', 'blueviolet', 'green', 'orange', 'blue', 'saddlebrown', 'gold'],
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

        let a = Math.trunc(Math.random() * 11);
        let b = Math.trunc(Math.random() * 11);
        let c = Math.trunc(Math.random() * 11);
        let d = Math.trunc(Math.random() * 11);

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

        arr.push([this.x, this.y, this.f, this.e, this.input1, this.input2, this.result1, this.result2, this.input2.hasAttribute('secondInput')]);
    },

    showResult: function () {
        let score = 0;
        clearInterval(showTime);

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
        result.innerHTML = 'Оценка: ' + score;
        setTimeout(() => location.reload(), 10000);
    }
}

//timer
let secInTimer = 59;
timer.innerHTML = 'Осталось: 1 мин 00 сек';
let showTime = setInterval(function () {
    timer.innerHTML = 'Осталось: 0 мин ' + secInTimer + ' сек';
    if (secInTimer < 10 && secInTimer >= 0) {
        timer.innerHTML = 'Осталось: 0 мин 0' + secInTimer + ' сек';
    }
    secInTimer--;
    if (secInTimer === -1) {
        newExample.showResult();
    }
}, 1000);

function createPage() {
    newExample.create('1');
    newExample.create('2');
    newExample.create('3');
    newExample.create('4');
    newExample.create('5');
}

createPage();
