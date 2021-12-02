
import React, {Component} from 'react';
import SearchBar from './SearchBar/SearchBar'
import API from './API/API'
import VideoList from './VideoList/VideoList'
import VideoDetail from './VideoDetail/VideoDetail'
import VideoPlayer from './VideoPlayer/VideoPlayer'


class App extends Component {
  state = {
    videos: [],
    selectedVideos: null
  }

  handleSubmit = async (termFromSearchBar) => {
     const response = await API.get('/search', {
       params: {
         q: termFromSearchBar
       }
     })
     this.setState({
       videos: response.data.items
     });
  };
    handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
    }

  render(){
    return(
      <div>
        <VideoPlayer videos={this.state.videos} />
      <div className='ui container' style={{marginTop: '1em'}}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className='ui grid'>
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
};

export default App;