import { HANDLE_INPUT_TEXT, RESET_INPUTS, TOGGLE_READY_TO_SUBMIT, TOGGLE_SUBMITTED } from "../constants/formConstants"

export const formReducer = (state = {initialState}, action) => {
  switch (action.type) {
    case HANDLE_INPUT_TEXT:
      return {
        ...state,
        [action.field]: action.payload,
      }
    case TOGGLE_READY_TO_SUBMIT:
      return {
        ...state,
        readyToSubmit: action.payload,
      }
    case TOGGLE_SUBMITTED:
      return {
        ...state,
        submitted: action.payload,
      }
    case RESET_INPUTS:
      return initialState
    default:
      return state
  }
}

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  readyToSubmit: false,
  submitted: false,
}