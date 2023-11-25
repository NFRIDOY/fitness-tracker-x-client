import axios from "axios";

// Vercel URL RepleaceMaent (carefull with the /)
// http://localhost:5000


const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
    withCredentials: true
})

const useAxios = () => {
    return instance;
};

export default useAxios;