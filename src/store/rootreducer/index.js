import { videoReducer }  from '../../modules/video/reducers'
import { combineReducers } from 'redux';


// add all reducers to root reducer for convenience (not need now)
export const rootReducers = {
  videoReducer,
}

export const rootReducer = combineReducers(rootReducers);


