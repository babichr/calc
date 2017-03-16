import axios from "axios";
const GET_ALL_CARDS = "GET_ALL_CARDS";


export const getAllCards = () => {
    return  (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then( response => {
                console.log(response);
                dispatch({
                    type: GET_ALL_CARDS,
                    payload: response.data
                });
            })
            .catch( response => console.log(response.data) )
    }
};



