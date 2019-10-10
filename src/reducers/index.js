const addDog = (state = [], action) => {
    switch(action.type){
        case 'ADD_DOG':
            return state.push(action.payload);
        default:
            return state;
    }
}

export default addDog;