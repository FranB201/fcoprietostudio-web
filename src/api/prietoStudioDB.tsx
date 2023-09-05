import axios from "axios";

const prietoStudioDB = axios.create({
    baseURL:'http://93.93.117.148:8080/api'

});


    /* baseURL:'http://localhost:8080/api' */
export default prietoStudioDB;