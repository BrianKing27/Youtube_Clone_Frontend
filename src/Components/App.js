import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from '../apis/youtube';
import RelatedVideos from './RelatedVideos/RelatedVideos';
import VideoDescription from './VideoDescription/VideoDescription';
import './App.css'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
        <div className="bg_image">
            <div className='ui container' style={{marginTop: '2em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDescription video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <RelatedVideos handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;