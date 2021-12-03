import axios from 'axios';
const KEY = 'AIzaSyBfOhQtn_Hyo4JY2MjHtSogk3fBp--zeFs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})