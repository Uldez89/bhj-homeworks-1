const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelectorAll('.tab__content');
tab.forEach((item) => {
    item.addEventListener('click', () => {
        tab.forEach(item => item.classList.remove('tab_active'));
        tabContent.forEach(item => item.classList.remove('tab__content_active'));
        const indexItem = tab.indexOf(item);
        item.classList.toggle('tab_active');
        tabContent[indexItem].classList.add('tab__content_active');
   })
})