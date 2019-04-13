import {IRequestInfo} from '../dataTypes/request'

interface IRequestState{
    requestBuffer:Array<IRequestInfo>
}

const initState:IRequestState ={
    requestBuffer:[]
}

const requestReducer = (state = initState, action) => {

    let newState = {...state};
    switch(action.type) {
        
        case 'INITIALIZE_ALL_REQUESTS':
            const {requestList} = action.payload
            newState.requestBuffer = requestList ? requestList : initState.requestBuffer;
            break;

        case 'CREATE_REQUEST':
            const {newRequest} = action.payload
            newState.requestBuffer.push({
                ...action.newRequest,
                id: newRequest.title.toLocaleLowerCase().replace(/ /g, '-'),
                date: new Date().toISOString
            });
            break;

        case 'DELETE_REQUEST':
            const {id} = action.payload
            newState.requestBuffer = state.requestBuffer.filter(request=>{
                return request.id !== id
            });
            break;

        default:
          // code block
      }
    return newState;
}

export default requestReducer