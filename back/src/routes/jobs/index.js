const { Router } = require('express');
const jobs = require('../../controllers/jobs');

const jobRouter = Router();

jobRouter.get('/', jobs.list);
jobRouter.post('/', jobs.register);
jobRouter.put('/:id', jobs.update);

module.exports = jobRouter;
