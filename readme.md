<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Counter App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Counter App</h1>
    <div id="counter">0</div>
    <div class="buttons">
      <button id="increase">Increase</button>
      <button id="decrease">Decrease</button>
      <button id="reset">Reset</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>


let count = 0;

const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
  count++;
  counterDisplay.innerText = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  counterDisplay.innerText = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counterDisplay.innerText = count;
});




<!-- Color Changer App -->
  <div class="container">
    <h1>Click to Change Background Color</h1>
    <button id="colorBtn">Change Color</button>
    <p id="colorCode"></p>
  </div>

// Color Changer App

const button = document.getElementById('colorBtn');
const colorCodeText = document.getElementById('colorCode');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);  // Red: 0-255
  const g = Math.floor(Math.random() * 256);  // Green: 0-255
  const b = Math.floor(Math.random() * 256);  // Blue: 0-255
  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorCodeText.innerText = `Current Color: ${randomColor}`;
});

<div class="container">
        <h1>My To-Do List</h1>
        <div class="input-group">
          <input type="text" id="todoInput" placeholder="Add a new task">
          <button id="addBtn">Add</button>
        </div>
        <ul id="todoList"></ul>
      </div>

// To-Do List App

const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Add new task
addBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();

  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${task}</span>
      <span class="remove-btn">✖</span>
    `;
    todoList.appendChild(li);
    todoInput.value = '';
  }
});

// Event delegation for marking complete and removing
todoList.addEventListener('click', (event) => {
  const target = event.target;

  // Remove task
  if (target.classList.contains('remove-btn')) {
    target.parentElement.remove();
  }

  // Toggle completion
  if (target.classList.contains('task-text')) {
    target.parentElement.classList.toggle('completed');
  }
});