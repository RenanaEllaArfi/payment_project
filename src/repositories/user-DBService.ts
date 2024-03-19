import {sql_con} from "../db/sql/sql.connection";
import {User} from "../types/user";
import {RowDataPacket} from "mysql2";
export class UserDBService {

    async getUser(id: number): Promise<User>{
        try {
            let query = `SELECT * FROM sales_users WHERE user_id = ${id}`;
            const [result] = ( await sql_con.query(query)) as unknown as RowDataPacket[][];
            const user = result[0] as User;
            //call parser function instead as
            return user;
        } catch (err) {
            console.log(err)
            throw new Error("DB ERROR")
        }
    }

    async createUser(user: User): Promise<User>{
        try {
            const {user_id, user_name, user_email, user_phone_number, password} = user;
            const params = [user_id, user_name, user_email, user_phone_number, password];

            let query = `INSERT INTO sales_users
                                SET ?`;
            const [result] = ( await sql_con.query(query, [params])) as unknown as RowDataPacket[][];
            const newUser = result[0] as User;
            //call parser function instead as
            return newUser;
        } catch (err) {
            console.log(err)
            throw new Error("DB ERROR")
        }
    }

}
const userDBService = new UserDBService();
export default userDBService;
