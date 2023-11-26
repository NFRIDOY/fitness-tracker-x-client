import axios from "axios";

// Vercel URL RepleaceMaent (carefull with the /)
// http://localhost:5000


const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    // baseURL: 'https://fitness-tracker-x-server-db.vercel.app/api/v1',
    withCredentials: true
})

const useAxios = () => {
    return instance;
};

export default useAxios;