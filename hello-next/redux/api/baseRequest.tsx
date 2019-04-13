import axios from 'axios';

export const BASE_API = "https://fdw9pvpyk6.execute-api.us-east-1.amazonaws.com/dev";

export const HttpVerb  = {
    GET: 'GET',
    POST: 'POST'
}

interface IAxiosConfig {
    method: string,
    url: string,
    data?:string;
}

export const executeRequest = (request:IAxiosConfig)=>{
    const {method, url, data} = request;

    const additionalConfigs = {
        ...(data && { data })
    }

    //return promise
    return axios({
        method,
        url,
        ...additionalConfigs
    })
    .then(res => res.data);
}