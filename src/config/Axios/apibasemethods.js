import axios from "axios";

let apiHandle = axios.create({
    baseURL: "http://localhost:5000/api",
});

let Get = (endPoint, id) => {
    if (id) {
        return apiHandle.get(`${endPoint}/${id}`);
    } else {
        return apiHandle.get(endPoint);
    }
};

let Post = (endPoint, id, body) => {
    if (id) {

        return apiHandle.put(`${endPoint}/${id}`, body);
    } else {
        return apiHandle.post(`${endPoint}`, body);
    }
};

let Delete = (endPoint, id) => {
    return apiHandle.delete(`${endPoint}/${id}`);
};

export { Get, Post, Delete };