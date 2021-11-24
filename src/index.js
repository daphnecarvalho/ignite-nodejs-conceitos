const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find((user) => username === user.username);

  if(!user) {
    return response.status(404).json({ error: "User not found!"});
  }

  request.user = user;

  return next();
}

function getTodo(response, user, id) {
  const todo = user.todos.find((todo) => todo.id === id);

  if(!todo) {
    return response.status(404).json({ error: "User TODO not found!"});
  }

  return todo;
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const checksExistsUserAccount = users.some(
    (user) => username === user.username
  );

  if(checksExistsUserAccount) {
    return response.status(400).json({ error: "Username already exists!"});
  }

  const user = {
    id: uuidv4(),
    name: name,
    username: username,
    todos: []
  }

  users.push(user);

  return response.status(201).json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;

  const todo = {
    id: uuidv4(),
    title: title,
    done: false, 
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(todo);

  return response.status(201).json(todo);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;
  const { title, deadline } = request.body;
  
  const todo = getTodo(response, user, id);

  todo.title = title;
  todo.deadline = new Date(deadline);

  return response.json(todo);
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const todo = getTodo(response, user, id);

  todo.done = true;

  return response.json(todo);
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const todo = getTodo(response, user, id);

  user.todos.splice(todo, 1);

  return response.status(204).send();
});

module.exports = app;