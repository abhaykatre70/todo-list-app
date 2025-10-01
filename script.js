// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const prioritySelect = document.getElementById('prioritySelect');
const categorySelect = document.getElementById('categorySelect');
const dueDateInput = document.getElementById('dueDateInput');

// Initialize variables
let tasks = [];
let editingTaskId = null;

// Set minimum date to today
dueDateInput.min = new Date().toISOString().split('T')[0];

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        priority: prioritySelect.value,
        category: categorySelect.value,
        dueDate: dueDateInput.value,
        createdAt: new Date()
    };
    
    tasks.push(task);

    // Reset form
    taskInput.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'medium';
    categorySelect.value = 'Personal';
    
    renderTasks();
    updateStats();
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    updateStats();
}

// Toggle Complete
function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
    updateStats();
}

// Render Tasks
function renderTasks() {
    if (tasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📝</div>
                <h3>No tasks yet!</h3>
                <p>Add your first task to get started</p>
            </div>
        `;
        return;
    }

    taskList.innerHTML = tasks.map(task => `
        <li class="task-item ${task.completed ? 'completed' : ''}">
            <div class="checkbox ${task.completed ? 'checked' : ''}" onclick="toggleComplete(${task.id})"></div>
            <div class="task-content">
                <div class="task-text">${task.text}</div>
                <div class="task-meta">
                    <span class="priority-badge priority-${task.priority}">${task.priority}</span>
                    <span class="category-badge">${task.category}</span>
                </div>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </li>
    `).join('');
}

// Update Statistics
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;
}

// Event Listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Initial render
renderTasks();
updateStats();