import axios from 'axios';
//import {BASE_URL} from "./api";
 
const instance = axios.create({
    baseURl: "https://api.themoviedb.org/3",
});

export default instance;