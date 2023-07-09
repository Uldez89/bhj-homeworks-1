let hole;
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
for (let i = 1; i < 10; i++) {
    hole = document.getElementById("hole" + i);
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
            if (dead.textContent == 10) {
                alert('Победа!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert('Проигрыш');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}