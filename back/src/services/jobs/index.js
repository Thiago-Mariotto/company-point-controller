const jobModel = require('../../models/jobs');

const list = async () => {
  const users = await jobModel.jobs();
  return users;
};

const find = async (id) => {
  const job = await jobModel.find(id);

  return job;
};

const register = async (job, description) => {
  const registeredId = await jobModel.register(job, description);

  const newJob = {
    id: registeredId,
    job, 
    description,
  };

  return newJob;
};

const update = async (id, job, description) => {
  const findJob = await jobModel.findJob(id);

  if (!findJob) throw new Error('no job found for id');

  const updatedJob = await jobModel.update(id, job, description);

  if (updatedJob) return true;
};

const remove = async (id) => jobModel.remove(id);

module.exports = {
  list,
  register,
  update,
  find,
  remove,
};