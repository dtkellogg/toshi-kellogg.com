import axios from 'axios';
import { PROJECT_DETAILS_FAIL, PROJECT_DETAILS_SUCCESS, PROJECT_DETAILS_REQUEST, PROJECT_LIST_REQUEST, PROJECT_LIST_SUCCESS, PROJECT_LIST_FAIL } from '../constants/projectConstants';

export const listProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_LIST_REQUEST });

    const { data } = await axios.get("/api/projects");

    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProjectDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_DETAILS_REQUEST,
    })

    const { data } = await axios.get(`/api/projects/${id}`);

    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};