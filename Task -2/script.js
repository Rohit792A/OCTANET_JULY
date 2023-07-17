// JavaScript code for handling form submission, task completion, and progress monitoring

document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form input values
    var task = document.getElementById('taskInput').value;
    var deadline = document.getElementById('deadlineInput').value;
    var priority = document.getElementById('priorityInput').value;

    // Create new task element
    var taskElement = document.createElement('li');
    taskElement.className = 'list-group-item';

    // Populate task details
    taskElement.innerHTML = `
        <span class="task">${task}</span><br>
        <span class="deadline">Deadline: ${deadline}</span><br>
        <span class="priority priority-${priority}">Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
        <button type="button" class="btn btn-sm btn-success float-right complete-btn">Complete</button>
    `;

    // Append the new task element to the task list
    document.getElementById('taskList').appendChild(taskElement);

    // Reset form inputs
    document.getElementById('taskInput').value = '';
    document.getElementById('deadlineInput').value = '';
    document.getElementById('priorityInput').value = 'high';

    updateProgress();
});

// Function to mark a task as completed
document.getElementById('taskList').addEventListener('click', function (e) {
    if (e.target.classList.contains('complete-btn')) {
        e.target.parentElement.classList.toggle('completed');
        updateProgress();
    }
});

// Function to calculate and update the progress
function updateProgress() {
    var totalTasks = document.getElementById('taskList').children.length;
    var completedTasks = document.getElementsByClassName('completed').length;
    var progress = Math.round((completedTasks / totalTasks) * 100);

    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').innerText = progress + '%';
}

// Function to remove completed tasks
document.getElementById('clearCompletedBtn').addEventListener('click', function () {
    var completedTasks = document.getElementsByClassName('completed');
    while (completedTasks.length > 0) {
        completedTasks[0].remove();
    }
    updateProgress();
});