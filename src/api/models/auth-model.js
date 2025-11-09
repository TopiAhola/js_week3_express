import promisePool from "../../../database/database.js";


const getPassword = async (id) => {
    const [rows] = await promisePool.execute('SELECT password FROM wsk_users WHERE user_id = ?', [id]);
    console.log('rows', rows);
    if (rows.length === 0) {
        return false;
    }
    return rows[0];
};

export {getPassword};
