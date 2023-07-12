let dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelector('.dropdown__value');
dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

let dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));
dropdownLink.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = item.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        
    })
})
