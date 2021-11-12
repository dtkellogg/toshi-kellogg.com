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
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
        readyToSubmit: false,
        submitted: false,
      }
    default:
      return state
  }
}

const nameFromStorage = localStorage.getItem('name')
  ? localStorage.getItem("name")
  : ""
const emailFromStorage = localStorage.getItem('email')
  ? localStorage.getItem("email")
  : ""
const subjectFromStorage = localStorage.getItem('subject')
  ? localStorage.getItem("subject")
  : ""
const messageFromStorage = localStorage.getItem('message')
  ? localStorage.getItem("message")
  : ""
const readyToSubmitFromStorage = localStorage.getItem('readyToSubmit')
  ? localStorage.getItem("readyToSubmit")
  : ""

const initialState = {
  name: nameFromStorage,
  email: emailFromStorage,
  subject: subjectFromStorage,
  message: messageFromStorage,
  readyToSubmit: readyToSubmitFromStorage,
  submitted: false,
};