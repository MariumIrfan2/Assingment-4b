import axios from "axios";


let apiHandle = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

let Get = (endPoint) => {
    return apiHandle.get(`${endPoint}`);

}

let GetById = (endPoint, id) => {
    return apiHandle.get(`${endPoint}/${id}`);

}

let Put = (endPoint, id, body) => {
    return apiHandle.put(`${endPoint}/${id}`, body);
}

let Post = (endPoint, body) => {
    return apiHandle.post(endPoint, body)
}

let Delete = (endPoint, id) => {
    return apiHandle.delete(`${endPoint}/${id}`);
}
export { Get, GetById, Put, Post, Delete };