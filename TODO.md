# Todo

## Frontend

- [ ] Display the meeting start time at the current time zone.
- [ ] Allow the user to click on a meeting, which shows a raw text editor.
- [ ] Allow the user to write raw text and save it.
- [ ] Display the notes of the meeting. Feel free to use Material UI components where necessary.

- Requirements
  - [ ] Use `yarn` for dependency management.
  - [ ] Use `Redux` for data flow and state management.
  - [ ] Use `Redux-Saga` for side effects, such as making network requests.

  ---

## Backend

- [x] Serve an unauthenticaded HTTP API to list meetings and its notes. ✅
- [x] Serve an unauthenticaded HTTP API to create notes against meetings.
- [ ] Sort meetings by start date.

- Requirements
  - [ ] Use `yarn` for dependency management.
  - [ ] Use `Koa` for HTTP handling.
  - [ ] Use `Sequelize` to interface with a SQLite in memory database.