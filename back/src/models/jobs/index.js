const connection = require('../connection');

const jobs = async () => {
  const conn = await connection();
  const [rows] = await conn.query('SELECT * FROM jobs');

  return rows;
};

const find = async (id) => {
  const conn = await connection();
  const [rows] = await conn.query('SELECT * FROM jobs WHERE id = ?', [id]);

  return rows[0];
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

const remove = async (id) => {
  const conn = await connection();
  await conn.query('DELETE FROM jobs WHERE id = ?', [id]);
};

module.exports = {
  jobs,
  find,
  register,
  update,
  remove,
};