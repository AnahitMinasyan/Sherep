import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sherepsite-project.firebaseio.com/'
});

export default instance;