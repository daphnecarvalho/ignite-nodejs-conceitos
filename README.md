# TODOs - Challenge: Node.js Concepts

Instructions: [Conceitos do Node.js](https://www.notion.so/Desafio-01-Conceitos-do-Node-js-59ccb235aecd43a6a06bf09a24e7ede8).

Application for managing TODOs.
## Base URL
http://localhost:3333

## Routes
### /users

* [<span style="color:#79c900">POST</span>] /

### /todos
* [<span style="color:#663399">GET</span>] / (Header: username)
* [<span style="color:#79c900">POST</span>] / (Header: username)
* [<span style="color:#ff8c00">PUT</span>] /:id (Header: username)
* [<span style="color:#ffc000">PATCH</span>] /:id/done (Header: username)
* [<span style="color:#ff0000">DELETE</span>] /:id
(Header: username)

## :orange_book: Requirements

- Criação de um usuário com `name` e `username`
- CRUD de TODOs para cada usuário
  1. Listar todos os *todos*;
  2. Criar um novo *todo*;
  3. Alterar o `title` e `deadline` de um *todo* existente;
  4. Marcar um *todo* como feito;
  5. Excluir um *todo*;

## :straight_ruler: Business rules

### :ok_woman: Users test
- [x] Should be able to create a new user
- [x] Should not be able to create a new user when username already exists

### :page_facing_up: _todos_ test
- [x] Should be able to list all user's todos
- [x] Should be able to create a new todo
- [x] Should be able to update a todo
- [x] Should not be able to update a non existing todo
- [x] Should be able to mark a todo as done
- [x] Should not be able to mark a non existing todo as done
- [x] Should be able to delete a todo
- [x] Should not be able to delete a non existing todo

## Tests
<p>
Test Suites: 2 total
</p>
<p>
Tests: 10 total
</p>

## :memo: Project commands
### Prepare project

```bash
  # Install dependencies
  yarn install
```
### :computer: Run project

```bash
  # Run project
  yarn dev
```
### Run tests

```bash
  # Run tests
  yarn test
```