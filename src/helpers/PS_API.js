import Axios from "axios";

const PS_API = Axios.create({
    baseURL: 'http://localhost:5000',
    headers: {'Accept': 'application/json'}
});

export default PS_API;