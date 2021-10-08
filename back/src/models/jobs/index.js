const connection = require('../connection');

const jobs = async () => {
  const conn = await connection();
  const [rows] = await conn.query('SELECT * FROM jobs');

  return rows;
};

const findJob = async (id) => {
  const conn = await connection();
  const [rows] = await conn.query('SELECT * FROM jobs WHERE id = ?', [id]);

  return rows;
};

const register = async (job, description) => {
  const conn = await connection();
  const [rows] = await conn
  .query(`
    INSERT INTO jobs (job_name, job_description) 
    VALUES (?, ?);
  `, [job, description]);
  
  return rows.insertId;
};

const update = async (id, job, description) => {
  const conn = await connection();

  const [rows] = await conn.query(`
    UPDATE 
      jobs
    SET 
      job_name = ?, 
      job_description = ?
    WHERE 
      id = ?`,
    [job, description, id]);

  return rows;
};

module.exports = {
  jobs,
  findJob,
  register,
  update,
};