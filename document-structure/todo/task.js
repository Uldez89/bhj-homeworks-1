const tasksInput = document.querySelector('.tasks__input');
const tasksControl = document.querySelector('.tasks__control');
let tasksList = document.querySelector('.tasks__list');
tasksControl.addEventListener('click', (e) => {
    e.preventDefault();
})
tasksInput.addEventListener('keyup',(e) => {
    if (e.code === 'Enter' && tasksInput.value.trim()) {
        tasksList.insertAdjacentHTML('afterBegin', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
        let taskTitle = document.querySelector('.task__title');
        taskTitle.textContent = tasksInput.value;
        let taskRemoveArr = document.querySelectorAll('.task__remove');
        taskRemoveArr.forEach((i) => {
            i.addEventListener('click', (e) => {
                e.preventDefault();
                let deleted = i.closest('.task');
                deleted.remove();
            })
        })
    }
})


