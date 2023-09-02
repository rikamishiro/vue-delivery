import axios from "axios";

export default ( url: string = "http://localhost:8081" ) => {

    axios.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "
        }
    })

}