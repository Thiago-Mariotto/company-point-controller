const mysql = require('mysql2/promise');
require('dotenv').config();

const { 
  MYSQL_PASS, 
  MYSQL_HOST, 
  MYSQL_DB, 
  MYSQL_USER, 
} = process.env;

// console.log(process.env);
const connection = async () => {
  try {
    if (global.connection && global.connection.state !== 'disconnected') { 
      return global.connection; 
    } 
    const conn = await mysql
      .createConnection(`mysql://${MYSQL_USER}:${MYSQL_PASS}@${MYSQL_HOST}:/${MYSQL_DB}`);
    console.log('Success connection with mysql');
    
    global.connection = conn;

    return conn;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection;