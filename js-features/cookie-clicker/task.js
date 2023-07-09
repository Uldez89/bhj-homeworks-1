let cookie = document.getElementById('cookie');
console.dir(cookie);
let clickerStatus = document.getElementById('clicker__counter');
cookie.onclick = function () {
    clickerStatus.textContent++;
    if (clickerStatus.textContent % 2 !== 0) {
        cookie.width = 300;
        cookie.height = 170;
    } else {
        cookie.width = 200;
        cookie.height = 128;
    }      
}