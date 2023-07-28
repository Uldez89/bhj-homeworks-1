const tasksInput = document.querySelector('.tasks__input');
const tasksControl = document.querySelector('.tasks__control');
let task = document.createElement('div');
task.classList.add('task');
let div = document.createElement('div');
let taskTitle = task.appendChild(div);
taskTitle.classList.add('task__title');
let a = document.createElement('a');
let taskRemove = task.appendChild(a);
taskRemove.setAttribute('href', '#');
taskRemove.classList.add('task__remove');
taskRemove.innerHTML = '&times;';
let tasksList = document.querySelector('.tasks__list');
tasksControl.addEventListener('click', (e) => { 
    e.preventDefault();
})
tasksInput.addEventListener('keyup',(e) => {
    if (e.code === 'Enter' && tasksInput.value.trim()) {
            
        taskTitle.textContent = tasksInput.value;
        tasksList.insertBefore(task,tasksList.firstElementChild);
}
})