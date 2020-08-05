import { combinedReducers } from 'redux'
import authReducer from './authReducer'
import projectReducer from './projectReducer'

const rootReducer = combinedReducers({
    auth: authReducer,
    project: projectReducer,
});

export default rootReducer;