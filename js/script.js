// DOM elements
const inputForm = document.getElementById("inputForm");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");



// An array for all the tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Rendering tasks when page is refreshed
if (localStorage.getItem("tasks")) {
  tasks.map((task) => {
    addTask(task)
  })
}


// Event Listeners
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskValue = taskInput.value;
 
  const task = {
    id: new Date().getTime(),
    name: taskValue,
    isCompleted: false
  }

  console.log(task);

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  addTask(task)

  inputForm.reset()
  taskInput.focus()
  }) 


taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains("deleteBtn") || e.target.parentElement.classList.contains("deleteBtn") || e.target.parentElement.parentElement.classList.contains("deleteBtn")) {
    const taskId = e.target.closest("li").id

    deleteTask(taskId)
  }
})


taskList.addEventListener('input', (e) => {
  const taskId = e.target.closest("li").id

  editTask(taskId, e.target)
})


taskList.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault()

    e.target.blur()
  }
})


// Adding a new task
function addTask(task) {
  const taskEle = document.createElement("li");

  taskEle.setAttribute("id", task.id)

  if (task.isCompleted) {
    taskEle.classList.add("completed");
  }

  const taskEleTemplate = `
      <div>
        <input type="checkbox" name="tasks" id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
        <span ${!task.isCompleted ? 'contenteditable' : '' }> ${task.name} </span>
      </div>
      <button title="Delete the "${task.name}" task" class="deleteBtn">
        <svg viewbox="0 0 24 24" fill="none">
          <path d="M17.25 17.25L6.75 6.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17.25 6.75L6.75 17.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    `

    taskEle.innerHTML = taskEleTemplate

    taskList.appendChild(taskEle)
}


// Deleting a task
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== parseInt(taskId))

  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("taskId").remove()
}


// Editing a task and marking it as complete
function editTask(taskId, el) {
  const task = tasks.find((task) => task.id === parseInt(taskId))

  if (el.hasAttribute('contenteditable')) {
    task.name = el.textContent
  }
  else {
    const span = el.nextElementSibling
    const parent = el.closest('li')

    task.isCompleted = !task.isCompleted

    if (task.isCompleted) {
      span.removeAttribute('contenteditable')
      parent.classList.add('completed') 
    }
    else {
      span.setAttribute('contenteditable', true)
      parent.classList.remove('completed')
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}





// // Mark task as done
// function markDone(e) {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("done");
//   }
// }


// // Event listeners

// taskList.addEventListener("dblclick", deleteTask);
// taskList.addEventListener("click", markDone);

















