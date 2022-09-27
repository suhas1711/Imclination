//FetchApi.js

import axios from "axios";
    
async function fetchPosts() {
    const { data } = await axios.get("http://localhost:5000/getdata")
    console.log(data)
    return data
}

export default fetchPosts;