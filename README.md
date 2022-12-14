<h1 align="center"><img src="./public/images/chatbot.png" width=80px"/></h1>

<h3 align="center">Chatbot</h3>

<p align="center">
  <a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>
</p>

## :speech_balloon: Sobre <a name="about"></a>

> Projeto de chatbot utilizando Typescript, SQlLite e WebSocket. Os testes unitários foram realizados com o jest.<br>
> O projeto utilizou principios do SOLID:<br>
> S — Single Responsiblity Principle (Princípio da responsabilidade única): utilizado na refatoração das rotas, no qual a mesma ficou somente com a responsabilidade de receber a requisação e retornar o que foi processado.<br>
> L — Liskov Substitution Principle (Princípio da substituição de Liskov): utilizado na criação das interfaces do Repository. <br>
> D — Dependency Inversion Principle (Princípio da inversão da dependência): utilizado para na refatoração o Service (alto nível), que antes dependia do Repository (baixo nível), e agora o Service não conhece o que o Repository está utilizando (SQLlite, Oracle, in-memory).<br>
> Também foi utilizada a injeção de dependência, buscando melhorar a testabilidade do código, no qual foi injetado as classes do Repository nas Interfaces.


<br />
<table>
  <tr>
    <td colspan="1">Visualização</td>
  </tr>
  <tr>
    <td><img src="./public/images/chatExample.png" width=1000px /></td></td>
  </tr>
</table>

## :warning: Instalação <a name="install"></a>

```bash
# Instalar todas as dependências necessárias:
$ npm install

# Iniciar migrations:
$ npm run typeorm migration:run

# Iniciar o projeto em localhost:
$ npm run dev

# Acesse a rota do cliente:
$ http://localhost:3333/pages/client

# Acesse a rota do admin:
$ http://localhost:3333/pages/admin

# Rodar os testes do projeto:
$ npm run test

```

## :heavy_check_mark: Tecnologias <a name="technologies"></a>

- [SQLite](https://www.npmjs.com/package/sqlite3)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Swagger](https://swagger.io/)
---

by [bruno Feijo Rocha](https://github.com/feijobruno) 
