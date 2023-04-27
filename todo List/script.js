'use strict';

const input = document.querySelector('#task-input');
const addBtn = document.querySelector('#enter');
const taskList = document.querySelector('.task-list');
let delBtn;

//////////////////////////////////////////////////////////////////////////
//functions to store/load the task list in/from local storage
const setLocalStorage = function () {
  localStorage.setItem('tasks', taskList.innerHTML);
};
const getLocalStorage = function () {
  const data = localStorage.getItem('tasks');
  if (!data) return;

  taskList.innerHTML = data;
};

//create button element for each task
const deleteTask = function () {
  delBtn = document.querySelectorAll('.delete-btn');
  if (!delBtn) return;
  //event handler to remove task and update local storage
  delBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.target.parentElement.remove();
      setLocalStorage();
    });
  });
};

//create task element with user input
const addTask = function () {
  const newTask = `<li class="task-item"><span>${input.value}</span><button class="delete-btn">X</button></li>`;
  //insert at the top of the list
  taskList.insertAdjacentHTML('afterbegin', newTask);
  setLocalStorage();
  deleteTask();
};

getLocalStorage();
deleteTask();

//add task to list on click and enter key
addBtn.addEventListener('click', addTask);
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') addTask();
});
