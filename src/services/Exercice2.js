import http from "../http-common";

export const getAllUsers = () => {
    return http.get("/users");
};

export const getuser = (id) => {
    return http.get(`/user/${id}`);
};

export const createUsers = (data) => {
    return http.post("/user", data);
};

export const updateUser = (id, data) => {
    return http.put(`/user/${id}`, data);
};

export const removeUser = (id) => {
    return http.delete(`/user/${id}`);
};