import { ACTION_LOAD_PLAYLIST, ACTION_CHANGE_ACTIVE_VIDEO } from '../actions'


const initialState = {
  videos : {},
  activeVideo: 'V-QO-KO90iQ',
 
}

export const videoReducer  = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_LOAD_PLAYLIST:
      return { ...state, videos: action.payload}
    case ACTION_CHANGE_ACTIVE_VIDEO: 
      return { ...state, activeVideo: action.payload}
    default: 
      return state;
  }
};