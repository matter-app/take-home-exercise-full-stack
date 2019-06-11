const express = require('express');
const { TeamMember } = require('./model');

const app = express();

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

module.exports = app;
