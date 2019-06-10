const express = require('express');
const { Employee } = require('./db');

const app = express();

app.get('/employees', async (req, res, next) => {
  const employees = await Employee.findAll();
  return res.json(employees);
});

module.exports = app;
