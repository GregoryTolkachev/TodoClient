import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './css/styles.css';
import TodoView from './hbs/TodoItemsTemplate.hbs';
import TodoItems from './hbs/todoItems.hbs';

import Todos from './js/todoApi';

let app = document.getElementById('app');
app.innerHTML = TodoView();

let todos = new Todos('https://localhost:5001/api/');

todos.getTodos().then((list) => {
	let itemsList = document.getElementById('items');
	console.log(list);
	itemsList.innerHTML = TodoItems(list);
});
