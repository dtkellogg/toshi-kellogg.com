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


const reducer = combineReducers({
    messageCreate: messageCreateReducer,
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
})

const initialState = {
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store