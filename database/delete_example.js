import promisePool from './database.js';

const deleteUserAndCats = async (userId) => {
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
};

export { deleteUserAndCats };
