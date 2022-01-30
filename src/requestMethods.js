import axios from "axios";


const BASE_URL = "https://sage-server.herokuapp.com/api/";
const TOKEN ="";

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).refresh)
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser))


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}

})