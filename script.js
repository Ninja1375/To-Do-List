// script.js
document.addEventListener(
 'DOMContentLoaded', () => {
  const taskForm = document
   .getElementById('task-form');
  const taskInput = document
   .getElementById('task-input');
  const taskList = document
   .getElementById('task-list');

  taskForm.addEventListener('submit',
   (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
   });

  function addTask(task) {
   const li = document.createElement(
    'li');
   li.textContent = task;

   const removeButton = document
    .createElement('button');
   removeButton.textContent =
    'Remover';
   removeButton.classList.add(
    'remove');
   removeButton.addEventListener(
    'click', () => {
     taskList.removeChild(li);
    });

   li.appendChild(removeButton);
   taskList.appendChild(li);
  }
 });
