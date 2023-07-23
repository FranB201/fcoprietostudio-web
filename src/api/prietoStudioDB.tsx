import axios from "axios";

const prietoStudioDB = axios.create({

    baseURL:'http://192.168.1.117:8080/api'

    

});


export default prietoStudioDB;