import axios from "axios";

const instance = axios.create({
     // THE API (Cloud Function) URL
    baseURL:"https://us-central1-clone-444b6.cloudfunctions.net/api"
    //"http://localhost:5001/clone-444b6/us-central1/api" ,
});

export default instance;