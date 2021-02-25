//*import http from "../http-common";
import http from "axios";

class UserDataService {
    
    register(data){
        return http.post("https://tn-giving.herokuapp.com/api/user/registerUser", data);
    }
    createUser(data){
        return http.post("/user/createUser", data);
    }
    login(data){
        return http.post("/user/login", data);
    }

    getAll() {
        return http.get("/user/");
    }
    get(id) {
        return http.get(`/user/${id}`);
    }

    update(id, data) {
        return http.put(`/user/${id}`, data);
    }

    delete(id) {
        return http.delete(`/user/${id}`);
    }

}

export default new UserDataService();