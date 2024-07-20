import axios  from "axios";

const intence = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    headers: {
        "Content-Type": "application/json"
    },

    timeout: 10000,
    
})

export default intence