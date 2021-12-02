import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>;
    }
   
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
           
            <div> <iframe title= "youtube player" id="ytplayer" type="text/html" width="640" height="360" src={videoSrc} frameBorder="0"  /></div>
            <div className='ui segment'>
                <p>{video.snippet.description}</p>
            </div>
        </div>
                
            
          
           

    )
}

export default VideoDetail;
