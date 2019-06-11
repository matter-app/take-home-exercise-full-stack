# Matter Engineering Coding Challenge

Welcome to the Matter coding challenge!

This full-stack challenge is designed to take about 2 hours and involves building a form component in React that also makes a request to the Node.js backend.

## Getting Set Up

The challenge requires [Node.js](https://nodejs.org/en/) to be installed. We recommend the LTS version.

Start by forking this repository and cloning your forked version.

In the repo root directory, run `npm install` to gather all dependencies.

Then run `npm start` which should start both the server and the React client.

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- The database provider is SQLite **in-memory**. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize.
- The API client we have set up for you is [axios](https://github.com/axios/axios). You are welcome to swap this out for your favorite client if you prefer.
- The server is running on port 3001 and all AJAX requests from the frontend will automatically proxy to that endpoint. For instance, you can `axios.get('/team')` and it will automatically hit `localhost:3001/team`.

## Acceptance Criteria

Below is a list of user stories corresponding to our acceptance criteria.

1. As a user, I can click a button inside the empty "NEW TEAMMATE" card at the bottom that says 'Join the team!'.

1. As a user, clicking the 'Join the team!' button displays a form allowing me to fill out all of my team member information as per the data model (see `backend/model.js`).

1. As a user, filling out the form will create a new team member in the database that persists on reload.

1. As a user, I can see team member cards for all of the new team members I have created.

## Going Above and Beyond the Requirements

The requirements above are relatively basic and can be interpreted as a starting point. There are many fancy things to do on top of the base requirements such as validation, testing, error-handling, styling, and more, but none of these are required.

Given the time expectations of this challenge, we don't expect anyone to submit anything incredibly fancy, but any extra credit item(s) that showcase your unique strengths would be awesome!
