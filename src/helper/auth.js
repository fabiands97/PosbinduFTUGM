import { setAuthorization } from "./general";
import axios from "axios";

export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('http://52.187.24.10:8080/api/v1/users/login/admin', credentials)
            .then((response) => {
                setAuthorization(response.data.token);
                res(response.data);
            })
            .catch(() =>{
                rej("Wrong email or password");
            })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}

export function getPetugas() {
    const petugasStr = localStorage.getItem("petugas");

    if(!petugasStr) {
        return null;
    }

    return JSON.parse(petugasStr);
}