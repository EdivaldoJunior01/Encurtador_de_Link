import axios from 'axios';

export const key = "644fffb4781da1f0f45a26fd1e9495b5376b5361"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}` 
    }
})

export default api;


//minha chave: 644fffb4781da1f0f45a26fd1e9495b5376b5361