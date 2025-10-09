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

// Load tasks from localStorage on page load
function loadTasks() {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            task.createdAt = new Date(task.createdAt);
        });
    }
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

// Add or Update Task Function
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    if (editingTaskId !== null) {
        const task = tasks.find(t => t.id === editingTaskId);
        task.text = taskText;
        task.priority = prioritySelect.value;
        task.category = categorySelect.value;
        task.dueDate = dueDateInput.value;
        editingTaskId = null;
        addBtn.textContent = 'Add Task';
    } else {
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

    taskInput.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'medium';
    categorySelect.value = 'Personal';
    
    saveTasks();
    renderTasks();
    updateStats();
}

// Delete Task Function
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        updateStats();
    }
}

// Toggle Task Completion
function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    saveTasks();
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
    taskInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    if (diffDays < 0) return '⚠️ Overdue';
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

// Sort tasks by priority and due date
function sortTasks(tasksToSort) {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    
    return tasksToSort.sort((a, b) => {
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        
        if (a.priority !== b.priority) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        
        if (a.dueDate && !b.dueDate) return -1;
        if (!a.dueDate && b.dueDate) return 1;
        if (a.dueDate && b.dueDate) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
}

// Render Tasks to DOM
function renderTasks() {
    let filteredTasks = filterTasks(currentFilter);
    filteredTasks = sortTasks([...filteredTasks]);
    
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
                <div class="task-text">${escapeHtml(task.text)}</div>
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

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && editingTaskId !== null) {
        editingTaskId = null;
        addBtn.textContent = 'Add Task';
        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'medium';
        categorySelect.value = 'Personal';
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

// Initialize app
loadTasks();
renderTasks();
updateStats();

// Auto-save every 30 seconds
setInterval(() => {
    if (tasks.length > 0) {
        saveTasks();
    }
}, 30000);

// Warn before leaving with unsaved changes
window.addEventListener('beforeunload', (e) => {
    if (editingTaskId !== null) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
    }
});