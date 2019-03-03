const initState ={
    itemsBuffer:[
        {id:'1', date:'24 November 2019', title:'Orange', description:'This project is'},
        {id:'2', date:'24 November 2019', title:'Papaya', description:'This project is'},
        {id:'3', date:'24 November 2019', title:'Durian', description:'This project is'},
        {id:'4', date:'24 November 2019', title:'Mango', description:'This project is'},
        {id:'5', date:'24 November 2019', title:'Apple', description:'This project is'},
        {id:'6', date:'24 November 2019', title:'Pear', description:'This project is'},
        {id:'7', date:'24 November 2019', title:'Melon', description:'This project is'},
        {id:'8', date:'24 November 2019', title:'Lemon', description:'This project is'},
        {id:'9', date:'24 November 2019', title:'Grape', description:'This project is'},
        {id:'10', date:'24 November 2019', title:'Watermelon', description:'This project is'},
        {id:'11', date:'24 November 2019', title:'Guava', description:'This project is'},
        {id:'12', date:'24 November 2019', title:'Pomegrate', description:'This project is'}
    ]
}

const itemReducer = (state = initState, action) => {

    let newState = {...state};
    switch(action.type) {

        case 'CREATE_NEW_MYITEM':
            newState.itemsBuffer = [
                ...state.itemsBuffer,
                {
                    ...action.newItem,
                    id: action.newItem.title.toLocaleLowerCase().replace(/ /g, '-'),
                    date: new Date().toISOString
                }
            ];
            break;

        case 'DELETE_MYITEM':
            newState.itemsBuffer = state.itemsBuffer.filter(item=>{
                return item.id !== action.id
            });
            break;

        default:
          // code block
      }
    return newState;
}

export default itemReducer