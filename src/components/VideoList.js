import React from 'react'
import VideoItem from './VideoItem';
const VideoList = ({ videos, onSelectedVideo }) => {
    
    console.log(videos);
    return (
        <div className='video-list'>
            <div style={{ padding: '10px 0' }}>
                <h3 style={{ textAlign: 'center', fontSize: '18px', fontWeight: '700' }}>
                    VideoList
                </h3>
                <h3>
                    <VideoItem videos={videos} onSelectedVideo={onSelectedVideo} />
                </h3>
            </div>
        </div>
    );
};

export default VideoList;