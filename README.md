# TODOs

Aplicação para gerenciar tarefas.
## :computer: Projeto

### :orange_book: Requisitos

- Criação de um usuário com `name` e `username`
- CRUD de TODOs
  1. Listar todos os *todos*;
  2. Criar um novo *todo*;
  3. Alterar o `title` e `deadline` de um *todo* existente;
  4. Marcar um *todo* como feito;
  5. Excluir um *todo*;

### :straight_ruler: Regras de negócio

#### :ok_woman: Teste de Usuários
- [x] Should be able to create a new user
- [x] Should not be able to create a new user when username already exists

#### :page_facing_up: Teste de _todos_
- [x] Should be able to list all user's todos
- [x] Should be able to create a new todo
- [x] Should be able to update a todo
- [x] Should not be able to update a non existing todo
- [x] Should be able to mark a todo as done
- [x] Should not be able to mark a non existing todo as done
- [x] Should be able to delete a todo
- [x] Should not be able to delete a non existing todo

### :memo: Executando o Projeto

```bash
# Instale as dependências
$ yarn

# Execute o projeto
$ yarn dev

# Execute os testes
$ yarn test