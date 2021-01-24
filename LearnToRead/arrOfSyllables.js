let sector = document.getElementsByTagName('th');

for (const el of sector) {
    el.addEventListener('click', function () {
        let div = document.getElementById('div');
        div.innerHTML = el.innerHTML;
        div.className = 'newSyllable';
        div.onclick = () => (div.className = '', div.innerHTML = '')
    });
}