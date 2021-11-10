# Contacts Challenge

Frontend + Backend application that allows you to create, read, update and
delete a list of contacts. Each contact will have: First name, Last name, Email, and
phone number. All the fields are mandatory and there can’t be two contacts with the
same email. You should be able to see the history of edits on those contacts. The
contacts will be persisted in the database.

## Installation

Back End - Nodejs

```bash
npm install
npm start
```
Initialize DB

```bash
knex migrate:latest
```

Front End - React

```bash
npm install
yarn install
npm start
```
