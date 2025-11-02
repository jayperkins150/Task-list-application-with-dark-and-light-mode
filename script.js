// Create array to store tasks
let tasks = [];

// Function to add new tasks
function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput) {
        tasks.push(taskInput); // Add new task to the tasks array
        document.getElementById("taskInput").value = ""; // Delete text in the task input field
        displayTasks(); // Display the updated tasks list
    } else {
        alert("Please enter a task"); // Alert if a task has not been entered into the task input field
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear current tasks list
    tasks.forEach((task, index) => {
        const li = document.createElement("li"); // Create new list item for a task
        li.textContent = task; // Add the text input to the task item
        const removeButton = document.createElement("button"); // Create remove item button
        removeButton.textContent = "Remove item"; // Set text content for remove item button
        removeButton.addEventListener("click", () => removeTask(index)); // Set the onClick event to remove a task
        li.appendChild(removeButton); // Add the remove button to the list item
        taskList.appendChild(li); // Add the list item to the task list
    });
}

// Add event listener to add task on Enter when task input field is populated
document.getElementById("taskInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
        addTask();
    } 
});

// Function to remove tasks
function removeTask(index) {
    tasks.splice(index, 1); // Remove task from the tasks list
    displayTasks(); // Display the updated tasks list
}



// Dark and light mode toggle


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