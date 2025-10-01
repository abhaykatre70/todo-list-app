// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const prioritySelect = document.getElementById('prioritySelect');
const categorySelect = document.getElementById('categorySelect');
const dueDateInput = document.getElementById('dueDateInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize variables
let tasks = [];
let currentFilter = 'all';
let editingTaskId = null;

// Set minimum date to today
dueDateInput.min = new Date().toISOString().split('T')[0];

// Add or Update Task Function
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    if (editingTaskId !== null) {
        // Update existing task
        const task = tasks.find(t => t.id === editingTaskId);
        task.text = taskText;
        task.priority = prioritySelect.value;
        task.category = categorySelect.value;
        task.dueDate = dueDateInput.value;
        editingTaskId = null;
        addBtn.textContent = 'Add Task';
    } else {
        // Add new task
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
    }

    // Reset form
    taskInput.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'medium';
    categorySelect.value = 'Personal';
    
    renderTasks();
    updateStats();
}

// Delete Task Function
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    updateStats();
}

// Toggle Task Completion
function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
    updateStats();
}

// Edit Task Function
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    taskInput.value = task.text;
    prioritySelect.value = task.priority;
    categorySelect.value = task.category;
    dueDateInput.value = task.dueDate;
    editingTaskId = id;
    addBtn.textContent = 'Update Task';
    taskInput.focus();
}

// Format Date Display
function formatDate(dateString) {
    if (!dateString) return 'No deadline';
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return '📅 Today';
    if (diffDays === 1) return '📅 Tomorrow';
    if (diffDays < 0) return '📅 Overdue';
    if (diffDays <= 7) return `📅 In ${diffDays} days`;
    return `📅 ${date.toLocaleDateString()}`;
}

// Filter Tasks Based on Selected Filter
function filterTasks(filter) {
    currentFilter = filter;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const weekFromNow = new Date(today);
    weekFromNow.setDate(weekFromNow.getDate() + 7);

    return tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'pending') return !task.completed;
        if (filter === 'completed') return task.completed;
        if (filter === 'high') return task.priority === 'high';
        if (filter === 'today') {
            if (!task.dueDate) return false;
            const dueDate = new Date(task.dueDate);
            return dueDate.toDateString() === today.toDateString();
        }
        if (filter === 'week') {
            if (!task.dueDate) return false;
            const dueDate = new Date(task.dueDate);
            return dueDate >= today && dueDate <= weekFromNow;
        }
        return true;
    });
}

// Render Tasks to DOM
function renderTasks() {
    const filteredTasks = filterTasks(currentFilter);
    
    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📝</div>
                <h3>No tasks found!</h3>
                <p>${currentFilter === 'all' ? 'Add your first task to get started' : 'Try a different filter'}</p>
            </div>
        `;
        return;
    }

    taskList.innerHTML = filteredTasks.map(task => `
        <li class="task-item ${task.completed ? 'completed' : ''}">
            <div class="checkbox ${task.completed ? 'checked' : ''}" onclick="toggleComplete(${task.id})"></div>
            <div class="task-content">
                <div class="task-text">${task.text}</div>
                <div class="task-meta">
                    <span class="priority-badge priority-${task.priority}">${task.priority}</span>
                    <span class="category-badge">${task.category}</span>
                    <span>${formatDate(task.dueDate)}</span>
                </div>
            </div>
            <div class="task-actions">
                <button class="action-btn edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
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
    if (e.key === 'Enter') {
        addTask();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// Initial render
renderTasks();
updateStats();