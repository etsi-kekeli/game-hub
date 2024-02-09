import axios from "axios";

export default axios.create({
        baseURL: 'https://api.rawg.io/api',
        params : {
        key: "1375d98733844ea8b007f630400866e5"
    }
}
)