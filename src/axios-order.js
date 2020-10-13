import axios from 'axios';


const instance = axios.create({
        baseURL: 'https://react-my-burger-3ae31.firebaseio.com/'
});

export default instance;