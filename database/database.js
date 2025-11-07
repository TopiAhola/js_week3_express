import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'appuser',
    password: 'password',
    database: 'cat_database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const promisePool = pool.promise(); //asyncroninen tietokanta...

export default promisePool;
