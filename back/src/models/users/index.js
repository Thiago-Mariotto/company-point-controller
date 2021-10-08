const connection = require('../connection');

const users = async () => {
  const conn = await connection();
  const [rows] = await conn.query('SELECT * FROM users');

  console.log(rows);
  return rows;
};

// eslint-disable-next-line max-params
const register = async (name, lastname, role, jobId, salary) => {
  const conn = await connection();
  const [rows] = await conn
  .query(`
    INSERT INTO users (first_name, last_name, role, job_id, salary) 
    VALUES ("${name}", "${lastname}", "${role}", "${jobId}", "${salary}");
  `);

  return rows.insertId;
};

module.exports = {
  users,
  register,
};