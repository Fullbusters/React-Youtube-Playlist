import React from 'react'
import ActiveVideo from './ActiveVideo'
import List from './List'


class VideoPage extends React.Component {
  render() {
    return(
      <div className = 'container'>
        <ActiveVideo/>
        <List/>
      </div>
    )
  }
}

export default VideoPage;