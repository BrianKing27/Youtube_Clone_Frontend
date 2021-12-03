import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const RelatedVideos = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoPlayer key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default RelatedVideos;