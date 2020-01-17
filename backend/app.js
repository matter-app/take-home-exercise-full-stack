const express = require('express');
const { TeamMember } = require('./model');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json())

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/team', async (req, res, next) => {
  const team = await TeamMember.create({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    title: req.body.title,
    story: req.body.story,
    favoriteColor: req.body.favoriteColor,
    photoUrl: req.body.photoUrl
  });
  return res.json(team);
});

module.exports = app;
