import {RequestHandler} from "express";
import UserService from "../services/user-service";
import jwt from "jsonwebtoken";
import {User} from "../types/user"
const { APP_SECRET} = process.env;

export class UserController {

    sign_in: RequestHandler = async (req, res) => {
        try {
            let user = new User();

            user.user_id = req.body("user_id", null);
            user.password = req.body("password", null);
            user.user_name = req.body("name");
            user.user_email = req.body("email", null);
            user.user_phone_number = req.body("phone_number", null);

            const newUser = await UserService.createUser(user);

            // Generate JWT token
            const token = jwt.sign({ userId: newUser.user_id }, APP_SECRET as string, { expiresIn: '1h' });

            //save token in db per user

            // Return token to the client
            res.status(200).json({
                status:'you are authenticated',
                user,
                token
            })
        } catch (error) {
            console.error('sign in error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    login: RequestHandler = async (req, res) => {
        try {
            // Retrieve username and password from request body
            const { user_id, password } = req.body;

           const user = await UserService.getUser((user_id))

            // If user not found or password does not match, return null
            if (!user || user.password != password) {
                throw "user details not found";
            }

            // Generate JWT token
            const token = jwt.sign({ userId: user.user_id }, APP_SECRET as string, { expiresIn: '1h' });

            //save token in db per user

            // Return token to the client
            res.status(200).json({
                status:'you are authenticated',
                user,
                token
            })
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

}

const userController = new UserController();
export default userController;