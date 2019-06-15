import { savePlayListToState } from '../actions'

// developers key from youtube
const KEY = 'AIzaSyD0WHIehPhGNIEvY1tt-KI0F-tPFfT_zyE';

export const loadAndSavePlayList = (query) => (dispatch) => {
  const url =  new URL('https://www.googleapis.com/youtube/v3/playlistItems'),
                params = {
                  part: 'snippet',
                  playlistId: 'PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ',
                  key: KEY,
                  maxResults: 50,
                }
                //add params to url
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  return fetch(url)
        .then(res => res.json())
        .then((result) => {
          dispatch(savePlayListToState(result.items))
        })
}