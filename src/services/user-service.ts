import userDBService from "../repositories/user-DBService";
import {User} from "../types/user"

export class UserService {
    async getUser(id: number):Promise<User> {
        const user = await userDBService.getUser(id);
        return user;
    }

    async createUser(user: User):Promise<User> {
        // add Encryption to the pass
        const newUser = await userDBService.createUser(user);
        return newUser;
    }
}

const userService = new UserService();
export default userService;

