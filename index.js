const inputField = document.getElementById('input_field');
const submitButton = document.getElementById('btn');
const todoDiv = document.getElementById('todo-div');

const todoArray = [];

submitButton.addEventListener('click',(event) => {
    event.preventDefault();
    const todo = inputField.value;
    console.log(todo);
//     todoDiv.innerHTML += `
//     <li class="list-group-item">${todo}</li>
// `;

const list = document.createElement('li');
list. classList.add('list-group-item')
list.innerHTML = `${todo}`;

const ul = document.createElement('ul');
ul.classList.add('list-group');
ul.appendChild(list);
todoDiv.appendChild(ul);

const todoarray = [
todo
];
console.log(todoarray);

todo.value = '';
})
