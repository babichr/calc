import { createStore, applyMiddleware, combineReducers } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { cardsReduce } from "./reducers"

const logger = createLogger();

const initialState = {
    cardsReduce: {
        cards: {},
        step: 12
    }
};

const makeRootReduces = ( ) => {
    return combineReducers({
        cardsReduce
    })
};

export const store = createStore(
	makeRootReduces(),
	initialState,
	applyMiddleware(
		thunk,
		logger
	)
);
