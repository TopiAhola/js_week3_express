import promisePool from './database.js';

const deleteExample = async (userId) => {
    const connection = await promisePool.getConnection();

    try {
        await connection.beginTransaction();

        await connection.execute('DELETE FROM tale1 WHERE user_id = ?;', [
            userId,
        ]);

        await connection.execute('DELETE FROM table2 WHERE user_id = ?;', [
            userId,
        ]);

        const sql = connection.format('DELETE FROM Users WHERE user_id = ?', [
            userId,
        ]);

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
