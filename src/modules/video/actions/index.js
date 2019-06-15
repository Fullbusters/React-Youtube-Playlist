export const ACTION_LOAD_PLAYLIST = 'ACTION_LOAD_PLAYLIST';
export const ACTION_CHANGE_ACTIVE_VIDEO = 'ACTION_CHANGE_ACTIVE_VIDEO';


export const savePlayListToState = (query) => {
  return {
    type: ACTION_LOAD_PLAYLIST,
    payload: query,
  }
}

export const changeActiveVideo = (query) => {
  return {
    type: ACTION_CHANGE_ACTIVE_VIDEO,
    payload: query,
  }
}