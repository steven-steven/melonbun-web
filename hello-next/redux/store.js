import {createStore} from 'redux';

const initState ={
    itemsBuffer:[
        {id:'1', date:'24 November 2019', title:'Project1', body:'This project is'},
        {id:'2', date:'24 November 2019', title:'Project2', body:'This project is'},
        {id:'3', date:'24 November 2019', title:'Project3', body:'This project is'}
    ]
}

const rootReducer = (state = initState, action) => {

    let newState = {...state};
    switch(action.type) {
        case 'REMOVE_PROJECT':
            break;
        case 'ADD_PROJECTENTRY':
            break;
        default:
          // code block
      }
    return newState;
}

export default createStore(rootReducer);