const initState ={
    favoriteRequests:['1','2','5']
}

const profileReducer = (state = initState, action) => {

    let newState = {...state};
    switch(action.type) {

        case 'ADD_TO_FAVORITE_REQUESTS':
            if(!state.favoriteRequests.includes(action.favoriteRequests)){
                newState.favoriteRequests = [
                    ...state.favoriteRequests,
                    action.requestId
                ];
            }
            break;

        case 'REMOVE_FROM_FAVORITE_REQUESTS':
            newState.favoriteRequests = state.favoriteRequests.filter(requestId=>{
                return requestId !== action.requestId
            });
            break;

        default:
          // code block
      }
    return newState;
}

export default profileReducer