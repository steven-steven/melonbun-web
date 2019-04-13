import {HttpVerb, executeRequest, BASE_API} from './baseRequest';

export function getAll(query:string='', params?:any){
    const request = { method: HttpVerb.GET, url:`${BASE_API}/requests${query}`, ...params};
    return executeRequest(request);
}

export function create(params?:any){
    const request = { method: HttpVerb.POST, url:`${BASE_API}/requests`, ...params};
    return executeRequest(request);
}

// export function get(id:string, query:string='', params?:any){
//     const request = { method: HttpVerb.GET, url:`${BASE_API}/requests/${id}${query}`, ...params};
//     return executeRequest(request);
// }
