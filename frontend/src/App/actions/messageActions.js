import axios from 'axios'
import { MESSAGE_CREATE_REQUEST, MESSAGE_CREATE_SUCCESS, MESSAGE_CREATE_FAIL, HANDLE_INPUT_TEXT, RESET_INPUTS, TOGGLE_SUBMITTED } from "../constants/messageConstants";

import useValidate from '../hooks/useValidate'

export const sendMessage = (e, addToast) => async (dispatch, getState) => {
  try {
    e.preventDefault()

    window.setTimeout(() => {
      dispatch({type: TOGGLE_SUBMITTED, payload: false})
    }, 4000);

    dispatch({
      type: MESSAGE_CREATE_REQUEST,
    });

    const { formData: { name, email, subject, message, submitted } } = getState()
    const isValid = useValidate(name, email, subject, message, addToast);

    if (isValid) {
      dispatch({type: TOGGLE_SUBMITTED, payload: true})
  
      window.setTimeout(() => {
        dispatch({type: TOGGLE_SUBMITTED, payload: false})
      }, 4000);
  
      const { data } = await axios.post(
        `/api/messages`,
        { name, email, subject, message },
      );
  
      dispatch({
        type: MESSAGE_CREATE_SUCCESS,
        payload: data,
      });

      window.setTimeout(() => {
        addToast("Success. I will get back to you ASAP.", {
          appearance: "success",
          autoDismiss: true,
        });
        localStorage.clear()
        dispatch({type: RESET_INPUTS})
      }, 4000);
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
            
    dispatch({
      type: MESSAGE_CREATE_FAIL,
      payload: message,
    });
  }
}

export const handleTextChange = (e) => async (dispatch) => {
  dispatch({
    type: HANDLE_INPUT_TEXT,
    field: e.target.name,
    payload: e.target.value,
  })

  localStorage.setItem(`${e.target.name}`, `${e.target.value}`)

  localStorage.getItem('name') && localStorage.getItem('email') && localStorage.getItem('subject') && localStorage.getItem('message')
    && localStorage.setItem("readyToSubmit", 'true')
}

export const resetInputs = () => async (dispatch) => {
  dispatch({type: RESET_INPUTS})
}