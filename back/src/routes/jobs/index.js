const { Router } = require('express');
const jobs = require('../../controllers/jobs');

const jobRouter = Router();

jobRouter.get('/', jobs.list);
jobRouter.get('/:id', jobs.find);
jobRouter.post('/', jobs.register);
jobRouter.put('/:id', jobs.update);
jobRouter.delete('/:id', jobs.remove);

module.exports = jobRouter;
