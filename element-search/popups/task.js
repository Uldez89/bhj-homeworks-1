let modalMain = document.querySelectorAll('.modal');
modalMain[0].classList.add("modal_active");
let modalClose = document.querySelectorAll('.modal__close');
modalClose.forEach((item) => {
    item.onclick = function () {
        for (let e of modalMain) {
            e.classList.remove("modal_active");
        }
    }
})
let showSuccess = document.querySelector('.show-success');
showSuccess.onclick = function () {
    modalMain[1].classList.add("modal_active");
};

