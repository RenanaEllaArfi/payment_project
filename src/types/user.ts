export class User {
    user_id: number = 0;
    user_name: string = "";
    user_email: string = "";
    user_phone_number : string = "";
    password: string = "";

    constructor(user?: User) {
        if (user) {
            this.user_id = user.user_id || 0;
            this.user_name = user.user_name || "";
            this.user_email = user.user_email || "";
            this.user_phone_number = user.user_phone_number || "";
            this.password = user.password || "";
        }
    }
}