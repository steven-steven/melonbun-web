import * as RequestApi from '../api/requestApi';
import {IRequestForm} from '../dataTypes/request';

export function getAllRequests(){
    return RequestApi.getAll();
}

export function createNewRequest(requestForm:IRequestForm){
    //filter parameter before sending to api as string
    //const data = JSON.stringify(requestForm);
    return RequestApi.create({data:requestForm});
}
