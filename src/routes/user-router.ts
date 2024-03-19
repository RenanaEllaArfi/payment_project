import express from 'express';
import raw from '../middlewares/route.async.wrapper';
import userController from "../controllers/user-contoller";

class UserRouter {
    private readonly UserRouter = express.Router();

    constructor() {
        this.UserRouter.patch('/login', raw(userController.login));
        this.UserRouter.patch('/sign_in', raw(userController.sign_in));

    }

    get router() {
        return this.UserRouter;
    }
}

const userRouter = new UserRouter();
export default userRouter;
