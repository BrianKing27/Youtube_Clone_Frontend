import './VideoPlayer.css'
import React from 'react';
const videoPlayer = (props) => {
    return (
        <iframe title= "youtube player" id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/$?autoplay=1&origin=http://example.com"
        frameBorder="0"></iframe>
    );
}

export default videoPlayer;