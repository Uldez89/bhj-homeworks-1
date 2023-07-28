const hasTooltip = document.querySelectorAll('.has-tooltip');
let tooltipActive = document.createElement('div');
tooltipActive.classList.add('tooltip');
hasTooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        tooltipActive.classList.toggle('tooltip_active');
        tooltipActive.textContent = item.getAttribute('title');
        item.appendChild(tooltipActive);
    })
})