// Get elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// // Displaying an alert message once when the website is launched
// window.alert("Welcome to your To-Do app! \n\n This is how the to-do app works: \n To mark that a task is complete click once on the task \n To delete a task double click on the task") 

  

// An array for all the tasks
let tasks = [];

// Adding a new task
function addTask(e) {
  e.preventDefault();
  const task = taskInput.value;
  if (task) {
    const li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li);
    taskInput.value = "";

    console.log(tasks);
  }
}
      

// Deleting a task
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

















