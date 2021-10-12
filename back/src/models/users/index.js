/* eslint-disable max-params */
const connection = require('../connection');

const users = async () => {
  const conn = await connection();
  const [rows] = await conn.query('SELECT * FROM users');

  return rows;
};

const find = async (id) => {
  const conn = await connection();
  const [rows] = await conn.query(`
    SELECT * FROM users as us
    INNER JOIN jobs as jb ON jb.id = us.job_id
    WHERE us.id = ?`,
    [id]);

  return rows;
};

const findUserByEmail = async (email) => {
  const conn = await connection();
  const [rows] = await conn.query('SELECT * FROM users WHERE email = ?', [email]);

  return rows;
};

const register = async (name, lastname, role, jobId, salary, email, password) => {
  const conn = await connection();
  const [rows] = await conn
  .query(`
    INSERT INTO users (first_name, last_name, email, password, role, job_id, salary) 
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `, [name, lastname, email, password, role, jobId, salary]);

  return rows.insertId;
};

const update = async (name, lastname, email, role, jobId, salary) => {
  const conn = await connection();
  await conn.query(`
    UPDATE users SET 
      first_name = ?,
      last_name = ?,
      email = ?,
      role = ?,
      jobId = ?,
      salary = ?
  `, [name, lastname, email, role, jobId, salary]);
};

const remove = async (id) => {
  const conn = await connection();
  const removedUser = conn.query('DELETE FROM users WHERE id = ?', [id]);

  return removedUser;
};

module.exports = {
  users,
  find,
  register,
  update,
  remove,
  findUserByEmail,
};