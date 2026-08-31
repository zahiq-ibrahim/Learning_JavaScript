
const addTaskBtn = document.getElementById('add-task-button');
const addTaskText = document.getElementById('task-info');

const toDoList = document.getElementById('to-do-list');
const doneList = document.getElementById('done-list');

let draggedTask = null;

toDoList.addEventListener("dragover", dragOver);
doneList.addEventListener("dragover", dragOver);

toDoList.addEventListener("drop", dropTask);
doneList.addEventListener("drop", dropTask);

addTaskBtn.addEventListener('click', addTask);

function addTask(){
    const taskText = addTaskText.value.trim();
    if(taskText === ""){
        return;
    }

    const task = document.createElement('div');
    task.classList.add("task");
    task.draggable = true;

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
   
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-button");

    delBtn.addEventListener('click', deleteTask);

    task.append(taskTextElement);
    task.append(delBtn);

    task.addEventListener("dragstart", dragStart);

    toDoList.append(task);
    addTaskText.value = "";
}

function deleteTask(event){
    event.target.parentElement.remove();
}

function dragStart(){
    console.log("Dragging");
    draggedTask = event.target;
}

function dragOver(){
    event.preventDefault();
}

function dropTask(event){
    event.preventDefault();
    event.currentTarget.append(draggedTask);
}

