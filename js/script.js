// Get elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task
function addTask(e) {
  e.preventDefault();
  const task = taskInput.value;
  if (task) {
    const li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Delete task
function deleteTask(e) {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
}

// Mark task as done
function markDone(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("dblclick", deleteTask);
taskList.addEventListener("click", markDone);
