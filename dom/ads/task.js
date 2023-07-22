
    const mainWord = document.querySelector('.rotator').closest('p');
    const rotatorCase = document.querySelectorAll('.rotator__case');
    let current = 0;
    setInterval(() => {
        rotatorCase.forEach((item) => {
            item.classList.remove('rotator__case_active');
        })
        rotatorCase[current].classList.add('rotator__case_active');
        current++;
        if (current == rotatorCase.length) {
            current = 0;
        }
    }, 1000);
