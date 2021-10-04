import axios from 'axios'
import { MESSAGE_CREATE_REQUEST, MESSAGE_CREATE_SUCCESS, MESSAGE_CREATE_FAIL } from "../constants/messageConstants";

export const sendMessage = (
    name,
    email,
    subject,
    message
) => async (dispatch) => {
    try {
        dispatch({
            type: MESSAGE_CREATE_REQUEST,
        });

        const { data } = await axios.post(
            `/api/messages`,
            { name, email, subject, message },
        );

        dispatch({
            type: MESSAGE_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        console.log(message)
                
        dispatch({
            type: MESSAGE_CREATE_FAIL,
            payload: message,
        });
    }
}