console.log(apiUrl)
const apiUrl = 'https://crudcrud.com/api/2e99403653934fddb0659a79f169dbb4/todos';



const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
const todoInput = document.getElementById('todo-input');
const descriptionInput = document.getElementById('description-input');
const addButton = document.getElementById('add-button');

// Function to fetch and display todos from CrudCrud
const fetchTodos = async () => {
    try {
        const response = await axios.get(apiUrl);
        const todos = response.data;
        renderTodos(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

// Function to render todos on the screen
const renderTodos = (todos) => {
    todoList.innerHTML = '';
    doneList.innerHTML = '';

    todos.forEach((todo) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const doneButton = document.createElement('button');
        doneButton.classList.add('done-button');
        doneButton.innerText = 'Done';
        doneButton.addEventListener('click', () => markAsDone(todo));

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(todo._id));

        const description = todo.description ? ` - ${todo.description}` : '';

        todoItem.innerHTML = `
            <span>${todo.title}${description}</span>
        `;
        todoItem.appendChild(doneButton);
        todoItem.appendChild(deleteButton);

        if (todo.isDone) {
            doneList.appendChild(todoItem);
        } else {
            todoList.appendChild(todoItem);
        }
    });
};

// Function to add a new todo
const addTodo = async () => {
    const title = todoInput.value.trim();
    if (title === '') return;

    const description = descriptionInput.value.trim();

    try {
        const response = await axios.post(apiUrl, {
            title,
            description,
            isDone: false,
        });
        const newTodo = response.data;
        todoInput.value = '';
        descriptionInput.value = '';
        fetchTodos();
    } catch (error) {
        console.error('Error adding todo:', error);
    }
};

// Function to mark a todo as done
const markAsDone = async (todo) => {
    try {
        await axios.put(`${apiUrl}/${todo._id}`, { isDone: true });
        fetchTodos();
    } catch (error) {
        console.error('Error marking as done:', error);
    }
};

// Function to delete a todo
const deleteTodo = async (todoId) => {
    try {
        await axios.delete(`${apiUrl}/${todoId}`);
        fetchTodos();
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
};

// Event listeners
addButton.addEventListener('click', addTodo);

// Initial fetch
fetchTodos();
