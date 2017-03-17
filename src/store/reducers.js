export const cardsReduce = ( state={}, action ) => {
    switch(action.type){
        case "GET_ALL_CARDS":
            return { ...state, cards: action.payload.cards, step: action.payload.step + 12 };
        default:
            return state;
    }
};
