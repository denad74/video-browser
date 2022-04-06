import axios from "axios";
import 'dotenv/config';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY
    },
    headers:{}
})