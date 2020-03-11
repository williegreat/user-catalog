import axios from "axios";
const httpService = axios;
const usersAddress = "http://localhost:4200/api/users";

export default class usersService {
    static getUsers() {
        return httpService.get(usersAddress);
    }

    static removeAllUsers() {
        return httpService.delete(usersAddress);
    }

    static addUser(user) {
        return httpService.post(usersAddress, {
            user
        });
    }

    static saveUser(user) {
        let headers = {
            "Content-Type": "application/json"
        };
        let options = {
            headers: headers
        };
        return httpService.put(usersAddress, { user }, options);
    }
}
