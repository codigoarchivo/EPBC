import axios from 'axios';

const epbcApi = axios.create({
    baseURL: '/api'
});

export default epbcApi;