import './App.css';
//* =======================================================================================
import React, {Component} from 'react';
import YTsearch from 'youtube-api-v3-search'
//* =======================================================================================
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList.jsx'


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          videos: "",
          currentVideo: null
      };
  }


  handleSubmit = (searchBarSearch) => {
      YTsearch({
        key: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCG-y0z5MIMoaKfxiGB10qVzo9ZuA5LDmk&type=video&maxResults=3&part=snippet&q=overwatch',
        term: searchBarSearch
      }, (videos) => {
        this.setState({
          videos: videos,
          currentVideo: videos[0]
        })
      }
    )
  }

  render(){
    return(
      <div>
        <VideoPlayer videos = {this.state.videos[0]}/>
        <SearchBar fetchVideos = {this.handleSubmit}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
};

export default App;