const hasTooltip = document.querySelectorAll('.has-tooltip');
let tooltipActive = document.createElement('div');
hasTooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        tooltipActive.classList.add('tooltip');
        tooltipActive.classList.toggle('tooltip_active');
        tooltipActive.textContent = item.getAttribute('title');
        item.appendChild(tooltipActive);
        let position = item.getBoundingClientRect();
        let left = position.left + (item.offsetWidth - tooltipActive.offsetWidth) / 2;
        if (left < 0) {
            left = 0;
        }
        let top = position.top - tooltipActive.offsetHeight - 5;
        if (top < 0) {
            top = position.top + tooltipActive.offsetHeight + 5;
        }
        tooltipActive.style.left = left + 'px';
        tooltipActive.style.top = top + 'px';
    })
})