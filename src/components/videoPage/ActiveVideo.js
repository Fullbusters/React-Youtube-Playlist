import React from 'react'
import YouTube from 'react-youtube';
import { connect } from 'react-redux'
import './css/ActiveVideo.css'


class ActiveVideo extends React.Component {
  
  render(){
    const { activeVideo } = this.props;

    //params for react-youtube
    const opts = {
      height: '600',
      width: '100%',
      playerVars: { 
        videoId: activeVideo,
        autoplay: 1,
        listType: 'playlist',
        list: 'PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ',
      }
    };
    return(
      <div className = 'activeVideo'> 
        <YouTube
          opts={opts}
          videoId={activeVideo}
          onReady={this._onReady}
        />
      </div>
    )
  }
  
  _onReady(event) {
    const title = event.target.getVideoData().title;
    document.title = title;
    console.log(event.target);
  }
}

const putStateToProps = (state) => {
  return {
    activeVideo: state.videoReducer.activeVideo,
  };
};

export default connect(putStateToProps)(ActiveVideo);