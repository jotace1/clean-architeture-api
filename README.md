

<h1 align="center">
    🚀 Clean Architeture Api
</h1>

<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-o-back-end-servidor">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-bibliotecas">Bibliotecas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Lincença</a>
</p>

<img src="https://github.com/jotace1/GoBarber_web/raw/master/src/assets/Capa.png"/>

### 📌 Sobre
Api desenvolvida com o intuito de colocar em prática os conceitos da clean architeture




### 📎 Features

#### Usuários
- [x] Criação de Usuário


### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://https://yarnpkg.com/)
Também, será necessário ter o [Docker](https://www.docker.com/) instalado e configurado em sua máquina.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🛢 Configurando Docker
```bash

# Clone este repositório
$ git clone https://github.com/jotace1/clean-architeture-api

# Crie o container do Postgres
$ docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres


````

### 🎲 Rodando o Back End (servidor)

```bash
# Instale as dependências
$ npm install ou yarn

# Configure as variáveis de ambiente

# Rode as migrations
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server 



# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
* Obs: Para executar os backend, crie um banco de dados.


### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- TypeScript
- Postgres

### 📕 Bibliotecas

Esse projeto foi desenvolvido com o auxílio das seguintes libs:

- Express
- Jest
- TypeORM
- Inversify
- Class-Validator

### 📙 Arquitetura do Projeto

Para uma melhor estrutura de projetos utilizamos das seguintes fundamentos:

- DDD
- SOLID


### 📝 Licença

Esse projeto está sob a licença MIT.

<hr/>

