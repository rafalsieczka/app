import axios from 'axios';

const URL_ROOT = 'http://localhost/api';
export default function client(path, config ={}){
    let configClient = {
        method: 'get'
    };


const secoundconfig = {
    url: '${URL_ROOT}${path}'
};

configClient = {
    ...configClient,
    ...config,
    ...secoundconfig,
};

return axios(configClient) ;
}