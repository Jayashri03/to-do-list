document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
  });

  function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    var listItem = document.createElement('li');
    listItem.className = 'taskItem';
    listItem.innerHTML = `
    <span>${taskInput.value}</span>
    <button onclick="toggleTaskCompletion(this)">COMPLETED</button>
    <button onclick="deleteTask(this)">X</button>
    `;

    taskList.appendChild(listItem);

    saveTasks();

    taskInput.value = '';
  }

  function toggleTaskCompletion(button) {
    var listItem = button.parentNode;
    listItem.classList.toggle('completed');

    saveTasks();
  }

  function deleteTask(button) {
    var listItem = button.parentNode;
    var taskList = listItem.parentNode;

    taskList.removeChild(listItem);

    saveTasks();
  }

  function saveTasks() {
    var taskList = document.getElementById('taskList');
    var tasks = taskList.innerHTML;
    localStorage.setItem('tasks', tasks);
  }

  function loadTasks() {
  var taskList = document.getElementById('taskList');
    taskList.innerHTML = localStorage.getItem('tasks') || '';
  }