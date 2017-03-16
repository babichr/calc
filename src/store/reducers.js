export const cardsReduce = ( state={}, action ) => {
    switch(action.type){
        case "GET_ALL_CARDS":
            return action.payload;
        default:
            return state;
    }
};
