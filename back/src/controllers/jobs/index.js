const jobService = require('../../services/jobs');

const list = async (req, res, next) => {
  try {
    const jobs = await jobService.list();

    return res.status(200).json(jobs);
  } catch (err) {
    console.log(`Error in list jobs: ${err.message}`);
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const { job, description } = req.body;
    
    const createdJob = await jobService.register(job, description);

    return res.status(200).json(createdJob);
  } catch (err) {
    console.log(`Error in register job: ${err.message}`);
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { job, description } = req.body;
    const { id } = req.params;

    const updatedJob = await jobService.update(id, job, description);

    return res.status(204).json(updatedJob);
  } catch (err) {
    console.log(`Error in update job: ${err.message}`);
    next(err);
  }
};

module.exports = {
  list,
  register,
  update,
};