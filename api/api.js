const express = require('express');
const apiRouter = express.Router();
const employeesRouter = require('./employees.js');
const timesheetsRouter = require('./timesheets.js');

apiRouter.use('/employees', employeesRouter);
apiRouter.use('/timesheets', timesheetsRouter);

module.exports = apiRouter;