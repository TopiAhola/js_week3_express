/*
const users = [
    {
        user_id: 1,
        name: 'John 1',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
    },
    {
        user_id: 2,
        name: 'John 2',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
    },
    {
        user_id: 3,
        name: 'John 3',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
    }
];
*/

import promisePool from '../../../database/database.js';

const listAllUsers = async () => {
    const [rows] = await promisePool.query('SELECT * FROM wsk_users');
    console.log('rows', rows);
    return rows;
};

const findUserById = async (id) => {
    const [rows] = await promisePool.execute('SELECT * FROM wsk_users WHERE user_id = ?', [id]);
    console.log('rows', rows);
    if (rows.length === 0) {
        return false;
    }
    return rows[0];
};

const addUser = async (user) => {
    const {name, username, email, role, password} = user;
    const sql = `INSERT INTO wsk_users (name, username, email, role, password)
               VALUES (?, ?, ?, ?, ?)`;
    const params = [name, username, email, role, password];
    const rows = await promisePool.execute(sql, params);
    console.log('rows', rows);
    if (rows[0].affectedRows === 0) {
        return false;
    }
    return {user_id: rows[0].insertId};
};

const modifyUser = async (user, userId, authorized_user) => {
    if(authorized_user.user_id == userId || authorized_user.role === 'admin') {
        const sql = promisePool.format(`UPDATE wsk_users
                                        SET ?
                                        WHERE user_id = ?`, [user, userId]);
        const rows = await promisePool.execute(sql);
        console.log('rows', rows);
        if (rows[0].affectedRows === 0) {
            return false;
        }
        return {message: 'success'};
    }
};

const removeUser = async (userId, authorized_user) => {

    if((authorized_user.user_id == userId) || (authorized_user.role === 'admin')) {
        console.log('try removing user'+userId+'from database');
        const connection = await promisePool.getConnection();
        try {
            await connection.beginTransaction();

            await connection.execute(
                'DELETE FROM wsk_cats WHERE owner = ?;',
                [userId]
            );

            const sql = connection.format(
                'DELETE FROM wsk_users WHERE user_id = ?',
                [userId]
            );

            const [result] = await connection.execute(sql);

            if (result.affectedRows === 0) {
                return {
                    message: 'User not deleted'
                };
            }

            // if no errors commit transaction
            await connection.commit();

            return {
                message: 'User deleted',
            };

        } catch (error) {
            await connection.rollback();
            console.error('error', error.message);
            return {
                message: error.message,
            }

        } finally {
            connection.release();
        }
    } else {
        return {
            message: 'No authorization to delete'
        };
    }
};

const findUserByUsername = async (name) => {
    const [rows] = await promisePool.execute('SELECT * FROM wsk_users WHERE name = ?', [name]);
    console.log('rows', rows);
    if (rows.length === 0) {
        return false;
    }
    return rows[0];

}

export {listAllUsers, findUserById, addUser, modifyUser, removeUser, findUserByUsername};
