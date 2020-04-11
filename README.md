# Projeto de conceitos iniciai gostack 11

## Como rodar o projeto

### Requisitos
 
 - Nodejs
 - Yarn
 - Terminal

```shell
  yarn
```
Primeiro execute este comando para que as dependencias possam ser instaladas

```shell
  yarn start
```
Depois rode a aplicação e seja feliz 🙂

### Rotas disponiveis

/repositories
  - Métodos: GET, POST
  - Dados a serem enviados [POST]:
```json
{
  "url": "https://github.com/RodDomin/gostack-template-conceitos-nodejs",
  "title": "example",
  "techs": ["react"]
}
```
  - Dados retornados:
```json
{
  "id": "uuid",
  "url": "https://github.com/RodDomin/gostack-template-conceitos-nodejs",
  "title": "example",
  "techs": ["react"],
  "likes": 0
}
```

/repositories/id
  - Métodos: PUT, DELETE
  - Dados enviados: ID do repositório, JSON com dados que deseja alterar (somente no put)
  - Dados retornados: repositório atualizado ou status de deletado

/repositories/id/likes
  - Métodos: POST
  - Dados enviados: null
  - Dados retornados:
```json
{
  "likes": 1
}
```