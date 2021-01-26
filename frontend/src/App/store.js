// Redux
import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import { messageCreateReducer } from './reducers/messageReducer';
import { projectDetailsReducer, projectListReducer } from './reducers/projectReducer';
import {
  modalCurrentProjectReducer,
  modalIsOpenReducer,
} from "./reducers/modalReducer";


const reducer = combineReducers({
    messageCreate: messageCreateReducer,
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    modalCurrentProject: modalCurrentProjectReducer,
    modalIsOpen: modalIsOpenReducer
})

const initialState = {
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store