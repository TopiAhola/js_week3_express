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


const findUserById = (id) => {
    let foundUser = users.find((user) => user.user_id == id);
    if (foundUser !== undefined) {
        console.log('findUserById user found:' + foundUser)
        return foundUser;
    } else {
        console.log('findUserById user not found');
        return null;
    }

}

const addUser = (user) => {
    users.push(user);
    return user;
}

const listAllUsers = () => {
    return users;
}

export {findUserById, addUser, listAllUsers } ;