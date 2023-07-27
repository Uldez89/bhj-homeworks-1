const interestsMain = document.querySelector('.interests_main');
const interestCheckFood = Array.from(document.querySelectorAll('.interest__check'));
interestCheckFood.forEach((item) => {
    item.addEventListener('click', () => {
        if (interestCheckFood.indexOf(item) === 0 && item.checked === true) {
            interestCheckFood[1].checked = true;
            interestCheckFood[2].checked = true;
        } else if (interestCheckFood.indexOf(item) === 0 && item.checked === false) {
            interestCheckFood[1].checked = false;
            interestCheckFood[2].checked = false;
        } else if (interestCheckFood.indexOf(item) === 3 && item.checked === true) {
            interestCheckFood[4].checked = true;
            interestCheckFood[5].checked = true;
        } else if (interestCheckFood.indexOf(item) === 3 && item.checked === false) {
            interestCheckFood[4].checked = false;
            interestCheckFood[5].checked = false;
        }
    })
})