// Redux
import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import { formReducer } from './reducers/formReducer';
import { messageCreateReducer } from './reducers/messageReducer';
import { projectDetailsReducer, projectListReducer } from './reducers/projectReducer';
import { modalSetProjectReducer, modalIsOpenReducer } from "./reducers/modalReducer";


const reducer = combineReducers({
  formData: formReducer,
  messageCreate: messageCreateReducer,
  projectList: projectListReducer,
  projectDetails: projectDetailsReducer,
  modalSetProject: modalSetProjectReducer,
  modalIsOpen: modalIsOpenReducer
})

const initialState = {
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store