import { HANDLE_INPUT_TEXT, RESET_INPUTS } from "../constants/formConstants"

export const formReducer = (state = {initialState}, action) => {
  switch (action.type) {
    case HANDLE_INPUT_TEXT:
      return {
        ...state,
        [action.field]: action.payload,
      }
    // case "TOGGLE READY TO SUBMIT":
    //   return {
    //     ...state,
    //     readyToSubmit: !state.readyToSubmit,
    //   }
    // case "TOGGLE SUBMITTED":
    //   return {
    //     ...state,
    //     submitted: !state.submitted,
    //   }
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
}