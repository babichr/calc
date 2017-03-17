import axios from "axios";
const GET_ALL_CARDS = "GET_ALL_CARDS";

export const getAllCards = ( step ) => {
    return  (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then( response => {
                dispatch({
                    type: GET_ALL_CARDS,
                    payload: {
                        cards: response.data.slice(0, step),
                        step: step
                    }
                });
            })
            .catch( response => console.log(response) )
    }
};



