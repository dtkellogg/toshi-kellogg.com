import { HANDLE_INPUT_TEXT, RESET_INPUTS } from "../constants/formConstants"

export const handleTextChange = (e) => async (dispatch) => {
    dispatch({
      type: HANDLE_INPUT_TEXT,
      field: e.target.name,
      payload: e.target.value,
    })
}

export const resetInputs = () => async (dispatch) => {
    dispatch({type: RESET_INPUTS})
}