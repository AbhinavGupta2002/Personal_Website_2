import {combineReducers} from 'redux'
import modeReducer from './ModeReducer'

const reducers = combineReducers({
    mode: modeReducer
})

export default reducers