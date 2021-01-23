let arrayOfTasks = [];
let arrayOfResults = [8, 11, 5, 10, 4, 2, 13, 4, 10, 15, 10, 3, 11, 2, 0];
let task = document.getElementById('task');
let button = document.getElementById('button');
let input = document.getElementById('input');
let result = document.getElementById('result');
let answer = document.getElementById('answer');
let scoreTrue = document.getElementById('scoreTrue');
let scoreFalse = document.getElementById('scoreFalse');

arrayOfTasks.push('Маша засушила 3 кленовых листика, а дубовых – на 2 листика больше. Сколько всего листиков засушила Маша?');
arrayOfTasks.push('У Пети 4 флажка, а у Вани на 3 флажка больше. Сколько флажков у обоих мальчиков?');
arrayOfTasks.push('Мама испекла 9 пирожков, а булочек – на 4 меньше. Сколько булочек испекла мама?');
arrayOfTasks.push('У Кати 6 матрёшек, а у Даши на 4 матрёшки больше. Сколько матрёшек у Даши?');
arrayOfTasks.push('В большой башне 8 окон, а в маленькой башне на 4 окна меньше. Сколько окон в маленькой башне?');
arrayOfTasks.push('Рыбак поймал 6 ершей, а окуней – на 4 меньше. Сколько окуней поймал рыбак?');
arrayOfTasks.push('Длина красного карандаша 10см, а простой карандаш на 3см длиннее. Какой длины простой карандаш?');
arrayOfTasks.push('Таня вырастила фиалку и кактус. Высота фиалки 7см, а кактус на 3см ниже фиалки. Какой высоты кактус?');
arrayOfTasks.push('В маленькой пирамидке 8 кружков, а в большой – на 2 кружка больше. Сколько кружков в большой пирамидке?');
arrayOfTasks.push('В Московском поезде 9 вагонов, а в Тульском на 3 вагона меньше. Сколько вагонов в обоих поездах?');
arrayOfTasks.push('На арене цирка выступают 7 жонглёров, а клоунов – на 4 меньше. Сколько циркачей выступает на арене?');
arrayOfTasks.push('Столяр починил 3 стола, а стульев – на 4 больше. Сколько столов починил столяр?');
arrayOfTasks.push('На крыше сарая висят 4 сосульки, а на крыше дома – на 6 сосулек больше. 3 сосульки растаяли. Сколько всего сосулек осталось висеть на крышах?');
arrayOfTasks.push('Мультфильм в кинотеатре начался в 5 часов, а закончился в 7 часов. Сколько часов шёл мультфильм?');
arrayOfTasks.push('На новый год в вазе лежали 13 мандаринов. 5 мандаринов сьел папа, 4 мандарина съела мама и еще 4 - бабушка. Сколько мандаринов осталось в вазе?');

let i;
i = Math.round(Math.random() * (arrayOfTasks.length - 1));
task.innerHTML = arrayOfTasks[i];

input.onkeyup = function () {
    let val = input.value;
    if ((+val)*1 !== +val && val.length == 1) {
        input.value = null;
    }
    if ((+val)*1 !== +val && val.length == 2) {
        input.value = val[0];
    }
}

let scoreTrueValue = 0;
let scoreFalseValue = 0;
scoreTrue.innerHTML = 0;
scoreFalse.innerHTML = 0;

function getResult() {
    let audioYes = new Audio();
    let audioNo = new Audio();
    audioYes.src = './yes.mp3';
    audioNo.src = './no.mp3';
    if (+input.value == arrayOfResults[i]) {
        audioYes.play();
        scoreTrue.innerHTML = ++scoreTrueValue ;
        input.disabled = 'disabled'
        button.disabled = true;
        result.innerHTML = 'ВЕРНО &#128521';
        result.style.color = 'green';
        setTimeout(function () {
            input.disabled = null;
            button.disabled = false;
            arrayOfTasks.splice(i, 1);
            arrayOfResults.splice(i, 1);
            result.innerHTML = null;
            input.value = null;
            if (arrayOfTasks.length) {
                i = Math.round(Math.random() * (arrayOfTasks.length - 1))
                task.innerHTML = arrayOfTasks[i];
            } else {
                task.innerHTML = 'Задачки закончились';
                answer.innerHTML = null;
            }
        }, 3000)
    } else {
        audioNo.play();
        scoreFalse.innerHTML = ++scoreFalseValue;
        input.disabled = 'disabled'
        button.disabled = true;
        result.innerHTML = 'НЕПРАВИЛЬНО &#128553';
        result.style.color = 'red';
        setTimeout(function () {
            input.disabled = null;
            button.disabled = false;
            result.innerHTML = null;
            input.value = null;
        }, 4000)
    }
}
    button.addEventListener('click', getResult);