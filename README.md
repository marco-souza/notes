Hugo code assignment
============

Thank you for taking the time to do our technical test.
The assignement is to build a very simplistic version of Hugo, in which the user will be able to see a list of meetings and write notes for them.
To start, please download and unzip the `assignment.zip` file attached to this email. It contains a GIT repository with the basic structure for you to build on top of.
The assignment consists of two parts:

* [Frontend](#frontend)
* [Backend](#backend)

## Frontend

In the `frontend` folder, you can find a basic web React app. The assignment is to modify this app in order to make it:
* Display a list of meeting provided by an HTTP API. ✅
* Display the meeting start time at the current time zone.
* Allow the user to click on a meeting, which shows a raw text editor.
* Allow the user to write raw text and save it.
* Display the notes of the meeting. Feel free to use Material UI components where necessary.

The requirements are as follows:
* Use `yarn` for dependency management.
* Use `Redux` for data flow and state management.
* Use `Redux-Saga` for side effects, such as making network requests.

## Backend

In the `backend` folder, you can find a basic blank NodeJS app. The assignment is to modify this app in order to make it:
* Serve an unauthenticaded HTTP API to list meetings and its notes. ✅
* Serve an unauthenticaded HTTP API to create notes against meetings.
* Sort meetings by start date.

The requirements are as follows:
* Use `yarn` for dependency management.
* Use `Koa` for HTTP handling.
* Use `Sequelize` to interface with a SQLite in memory database.

## Delivery
Both apps should be able to run locally by using the `yarn start` command.
When you're finished, please follow these steps:
1) Create a branch named `hugo`.
2) Delete the `node_modules` folder in each project.
3) Commit your changes and zip the contents of the repository into a **single** zip file.
3) Email the file to `csampaio@hugo.ai` and cc `jl@hugo.team` with the subject `Code Assignment`.


Thanks for your time, we look forward to hearing from you!
