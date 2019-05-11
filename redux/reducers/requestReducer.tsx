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

        default:
          // code block
      }
    return newState;
}

export default requestReducer