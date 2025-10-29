//Select the dark mode button
const toggleButton = document.getElementById("toggleButton");

//Function to switch between light and dark modes
function toggleMode() {
    const body = document.body;
    const header = document.querySelector("header");

    //Toggle light and dark mode on body and header 
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark-mode");

    //Update button text
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Turn on light mode";
    } else {
        toggleButton.textContent = "Turn on dark mode";
    }
}

//Add event listener to the toggle button
toggleButton.addEventListener("click", toggleMode);


//Array to store tasks
let tasks = [];

//Function to add new tasks
function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput) {
        tasks.push(taskInput); //Add new task to the tasks array
        document.getElementById("taskInput").value = ""; //Delete text in the task input field
        displayTasks(); //Display the updated tasks list
    } else {
        alert("Please enter a task."); //Alert if the input field is empty
    }
}

//Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; //Clear the current tasks list
    tasks.forEach((tasks, index) => {
        const li = document.createElement("li"); //Create a list item for each task
        li.textContent = task; //Set the text of the list item to the task
        const removeButton = document.createElement("button"); //Create remove item button
        removeButton.textContent = "Remove"; //Set the text of the remove item button
        removeButton.onClick = () => removeTask(index); //Set the onClick event to remove a task
        li.appendChild(removeButton); //Add the remove button to the list item
        taskList.appendChild(li); //Add the list item to the task list
    });
}

function removeTask(index) {
    tasks.splice(index, 1); //Remove task from the tasks list
    displayTasks(); //Display the updated tasks list
}
