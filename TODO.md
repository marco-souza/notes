# Todo

## Frontend

- [X] Display the meeting start time at the current time zone.
- [X] Allow the user to click on a meeting, which shows a raw text editor.
- [x] Allow the user to write raw text
- [X] Display the notes of the meeting. Feel free to use Material UI components where necessary.
- [x] Add Note button
- [x] save notes
- [ ] * Add Meeting button
- [X] Selected items
- [X] Pass values to text editor
- [X] Change opened text
- [x] Edit save button stile
- [x] Create zero fucking state
- [ ] * tests
- [ ] document
  - [ ] MUI not updated
  - [ ] first time working with saga
  - [ ] first time working with koa
  - [ ] The problem asks to return all notes with each meeting, which isn't a restful good practice

- Requirements
  - [X] Use `yarn` for dependency management.
  - [X] Use `Redux` for data flow and state management.
  - [X] Use `Redux-Saga` for side effects, such as making network requests.

  ---

## Backend

- [X] Serve an unauthenticated HTTP API to list meetings and its notes. ✅
- [X] Serve an unauthenticated HTTP API to create notes against meetings.
- [X] Sort meetings by start date.
- [x] Deal with Cors and containers
- [ ] * Add meeting

- Requirements
  - [X] Use `yarn` for dependency management.
  - [X] Use `Koa` for HTTP handling.
  - [X] Use `Sequelize` to interface with a SQLite in memory database.