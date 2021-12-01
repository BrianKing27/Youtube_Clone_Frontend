import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          videos: ""
      };
  }

  componentDidMount(){
    this.fetchVideo();
}

  fetchVideo = async (searchTerm) => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCG-y0z5MIMoaKfxiGB10qVzo9ZuA5LDmk&q=${searchTerm}&maxResults=5&type=video&part=snippet`);
      console.log(response.data.items);
   
      this.setState({
        videos: this.state.videos
      })
    }
    catch(error){
    }
}


  render(){
    return(
      <div>
      <VideoPlayer videos = {this.state.videos[0]}/>
      <SearchBar fetchVideos = {this.fetchVideo}/>
      </div>
    )
  }
}

export default App;