const timer = document.getElementById('timer');
let timerReduce = function () {
    timer.textContent--;
    if (timer.textContent == 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!")
    }
}
let timerId = setInterval(timerReduce, 1000);
