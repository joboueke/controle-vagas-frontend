# Controle de Vagas — Frontend (Angular)

Frontend em Angular para consumo da API REST **Controle de Vagas**, permitindo gerenciar candidaturas de emprego/estágio (CRUD completo).

Este projeto faz parte de uma aplicação full-stack:
- **Frontend:** Angular  
- **Backend:** Spring Boot  
- **Banco:** PostgreSQL  

---

## Visão Geral

A aplicação permite:

- Listar vagas
- Criar nova vaga
- Editar vaga existente
- Visualizar dados da vaga
- Excluir vaga

O frontend consome uma **API REST** desenvolvida em Spring Boot, trocando dados via **HTTP + JSON**.

---

## Tecnologias Utilizadas

- Angular 17
- TypeScript
- Bootstrap
- Angular Router
- HttpClient
- Git & GitHub

---

## Arquitetura do Frontend

O projeto segue uma arquitetura organizada em camadas:
src/app
│
├── core
│ ├── models → Interfaces dos dados (Vaga)
│ └── services → Comunicação HTTP com o backend
│
├── pages
│ ├── vaga-lista → Tela de listagem
│ └── vaga-form → Tela de criação e edição
│
├── app.routes.ts → Rotas da aplicação
└── app.html → Contém o <router-outlet>


### Princípios aplicados
- Separação de responsabilidades
- Reutilização de componentes
- SPA (Single Page Application)
- Integração real com backend

---

## Comunicação com o Backend

O frontend se comunica com o backend via **HTTP** usando o serviço `VagaService`.

Base URL da API:
http://localhost:8080

Endpoints consumidos:

| Método | Endpoint           | Função            |
|--------|--------------------|-------------------|
| GET    | /vagas             | Listar vagas      |
| GET    | /vagas/{id}        | Buscar por ID     |
| POST   | /vagas             | Criar vaga        |
| PUT    | /vagas/{id}        | Atualizar vaga    |
| DELETE | /vagas/{id}        | Excluir vaga      |

---

## Funcionamento Geral

1. O usuário interage com o frontend (Angular)
2. O Angular envia requisições HTTP para o backend
3. O backend processa e acessa o banco de dados
4. O backend retorna JSON
5. O Angular exibe os dados na tela

---

## Como Executar

## Pré-requisitos
- Node.js
- Angular CLI
- Backend rodando em `http://localhost:8080`

## Instalar dependências
npm install

## Rode o projeto
ng serve

## Acesse:
http://localhost:4200

