import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { changeActiveVideo} from '../../modules/video/actions'
import { loadAndSavePlayList } from '../../modules/video/apis'
import './css/List.css'


class List extends React.Component {

  componentDidMount() {
    const { loadPlayList } = this.props;
    loadPlayList();
  }

  render(){
    const { videos, changeActiveVideo } = this.props;
    return(
      <div className = 'containerPlaylist'>
        <div className = 'playlistInfo'>
          { videos.length ? (
            videos[0].snippet.channelTitle)
          : (<h2>wait</h2>)}
        </div>
        <div className = 'videoList'> 
          { videos.length ? (
              videos.map(function(item, i){
                    return(
                        <div key={item.id} className = 'playlistItem' 
                          onClick = {e => {
                            changeActiveVideo(item.snippet.resourceId.videoId)
                          }}>
                            <span>{item.snippet.position + 1}</span>
                            <img className = 'image' alt = 'loading' src = {item.snippet.thumbnails.medium.url}></img>
                            <div>{item.snippet.title}</div>
                          </div>
                    )
              })) 
            : (<h2>wait</h2>)
          }
        </div>
      </div> 
    )
  }
}

const putStateToProps = (state) => {
  return {
    videos: state.videoReducer.videos,
  };
};

const putActionsToProps = (dispatch) => {
  return {
    loadPlayList: bindActionCreators(loadAndSavePlayList ,dispatch),
    changeActiveVideo: bindActionCreators(changeActiveVideo, dispatch),
  };
};

export default connect(putStateToProps,putActionsToProps)(List);