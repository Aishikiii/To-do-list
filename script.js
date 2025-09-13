document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">❌</button>
        `;

        const span = li.querySelector('span');
        const deleteBtn = li.querySelector('.delete');

        // Toggle completed state
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete task
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
});
