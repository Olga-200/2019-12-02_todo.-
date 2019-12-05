

'use strict';

let modalAddTask = document.querySelector('#modalAddTask');
let formAddTask = document.querySelector('#formAddTask');

formAddTask.addEventListener('submit', function(event) {
	event.preventDefault();

	let newTask = {
		title: this.elements.title.value,
		status: 1 // 1 - todo, 2 - inprogress, 3 - done
	};

	let id = new Date().getTime();

	addTask(newTask, id);

	localStorage.setItem(id, JSON.stringify(newTask));

	$(modalAddTask).modal('hide');

	this.reset();
});

function addTask(newTask, id) {
	let taskElement = document.createElement('li');
	taskElement.classList.add('list-group-item');
	taskElement.innerText = newTask.title;   //this.element.title.value;


	let taskContainer = document.querySelector(`[data-status="${newTask.status}"]`);
	taskContainer.appendChild(taskElement);
}

for (let key in localStorage) {
	if (localStorage.hasOwnProperty(key)) {
		let task = JSON.parse(localStorage[key]);
		addTask(task, key);
	}
}