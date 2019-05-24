# Todo

## Frontend

- [X] Display the meeting start time at the current time zone.
- [ ] Allow the user to click on a meeting, which shows a raw text editor.
- [ ] Allow the user to write raw text and save it.
- [ ] Display the notes of the meeting. Feel free to use Material UI components where necessary.

- Requirements
  - [X] Use `yarn` for dependency management.
  - [X] Use `Redux` for data flow and state management.
  - [X] Use `Redux-Saga` for side effects, such as making network requests.

  ---

## Backend

- [X] Serve an unauthenticaded HTTP API to list meetings and its notes. ✅
- [X] Serve an unauthenticaded HTTP API to create notes against meetings.
- [X] Sort meetings by start date.
- [ ] Deal with Cors and containers 

- Requirements
  - [X] Use `yarn` for dependency management.
  - [X] Use `Koa` for HTTP handling.
  - [X] Use `Sequelize` to interface with a SQLite in memory database.