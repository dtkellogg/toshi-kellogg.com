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


const reducer = combineReducers({
    messageCreate: messageCreateReducer
})

const initialState = {
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store