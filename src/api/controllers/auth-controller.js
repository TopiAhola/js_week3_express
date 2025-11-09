import {getPassword} from "../models/auth-model.js";


const login = (req, res) => {
    console.log('login in login-controller')
    console.log('user id: '+req.body.user_id);
    const password = getPassword(req.body.user_id);
    password.then(
        password => {
            if (password) {
                console.log('return user: '+user)
                res.json(user);


            } else {
                res.sendStatus(401);
            }
        },
        result => {
            console.log('error in login in auth-controller');
            console.log(result);
            res.sendStatus(500);
        }
    );
};

export {login };
