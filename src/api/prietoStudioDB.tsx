import axios from "axios";

const prietoStudioDB = axios.create({

    baseURL:'http://localhost:8080/api'



});


export default prietoStudioDB;