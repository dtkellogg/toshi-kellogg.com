import { HANDLE_INPUT_TEXT, RESET_INPUTS, TOGGLE_SUBMITTED } from "../constants/formConstants"
import { sendMessage } from "./messageActions";


import useValidate from '../hooks/useValidate'

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

export const handleSubmit = (e, addToast) => async (dispatch, getState) => {
  try{
    e.preventDefault()
    
    window.setTimeout(() => {
      dispatch({type: TOGGLE_SUBMITTED, payload: false})
    }, 4000);
  
  
    const { formData: { name, email, subject, message, submitted } } = getState()
    const isValid = useValidate(name, email, subject, message, addToast);
  
    if (isValid) {
      dispatch({type: TOGGLE_SUBMITTED, payload: true})
  
      window.setTimeout(() => {
        dispatch({type: TOGGLE_SUBMITTED, payload: false})
      }, 4000);
  
      await dispatch(sendMessage(name, email, subject, message))
        .then(() => {
          window.setTimeout(() => {
            addToast("Thank you! Your message has been successfully submitted.", {
              appearance: "success",
              autoDismiss: true,
            }
          );
          localStorage.clear()
          dispatch({type: RESET_INPUTS})
          }, 4000);
        }
      );
    }
  } catch (error) {
    addToast("There was an error. Please refresh the page.", {
      appearance: "error",
      autoDismiss: true,
    })
  }
}