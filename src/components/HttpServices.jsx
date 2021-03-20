import axios from "axios";

//exporting all axios methods this is only one place where we need to change the Api consuming library
const Axios = {
    post:axios.post,
    get:axios.get,
    put:axios.put,
    delete:axios.delete,
};
export default Axios;