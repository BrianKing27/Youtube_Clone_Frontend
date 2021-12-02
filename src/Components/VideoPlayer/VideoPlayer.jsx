import './VideoPlayer.css'
import React from 'react';
const VideoPlayer = (props) => {
    return (
        <iframe title= "youtube player" id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/KI7Efy0IWQk?autoplay=1&norigin=http://example.com"
        frameBorder="0"></iframe>
    );
}

export default VideoPlayer; 