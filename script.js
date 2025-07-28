// Counter App

let count = 0

const counter = document.getElementById("counter")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")

increase.addEventListener('click', () => {
  count++,
  counter.innerText = count
})

decrease.addEventListener('click', () => {
  if (count > 0) {
    count--,
    counter.innerText = count
  }
})

reset.addEventListener('click', () => {
  count = 0,
  counter.innerText = count
})

// Color Changer App

const colorBtn = document.getElementById("colorBtn")
const colorCode = document.getElementById("colorCode")

function getBgColor () {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

colorBtn.addEventListener('click', () => {
  const bgColor = getBgColor()
  document.body.style.backgroundColor = bgColor
  colorBtn.innerText = `Current Color ${bgColor}`
})

// Todo

const todoInput = document.getElementById("todoInput")
const todoBtn = document.getElementById("todoBtn")
const todoDisplay = document.getElementById("todoDisplay")

function addTask () {
  const inputTaken = todoInput.value.trim()
  if (inputTaken !== '') {
    const li = document.createElement("li")
    li.innerHTML = `
      <span class="task-text">${inputTaken}</span>
      <span class="remove-task">❌</span>
    `
    todoDisplay.appendChild(li)
    inputTaken = ''
  }
}

todoBtn.addEventListener('click', addTask)

todoInput.addEventListener('keydown',(event) => {
  if (event.key == "Enter") {
    addTask()
  }
})

todoDisplay.addEventListener("click", (event) => {
  const target = event.target

  if (target.classList.contains("remove-task")) {
    target.parentElement.remove()
  }

  if (target.classList.contains("task-text")) {
    target.parentElement.classList.toggle("completed")
  }
  
})

// Form Validation

const form = document.getElementById("contactForm")

form.addEventListener("submit", function(event) {
  event.preventDefault()

  const userName = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  if (userName === '' || email == '' || message == '') {
    alert("Please fill all the fields")
    return
  }

  if (!validateEmail(email)) {
    alert("please enter a valid email")
    return
  }

  alert("Form Sent Successfully")
  form.reset(); // Clear the form

})

function validateEmail (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}