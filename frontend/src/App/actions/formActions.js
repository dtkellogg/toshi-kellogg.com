

export const handleTextChange = (e) => async (dispatch) => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    })
}

export const resetInputs = () => async (dispatch) => {
    dispatch({type: "RESET INPUTS"})
}