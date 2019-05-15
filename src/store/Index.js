import { applyMiddleware, createStore, compose} from 'redux'
import myReducer from './Reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_

const store = createStore(
    myReducer,
    composeEnhancers(
        applyMiddleware(thunk, logger)
    )
)
export default store;
