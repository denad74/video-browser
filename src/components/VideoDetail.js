import React from 'react';

const VideoDetail = ({ videoId }) => {
    if (!videoId) {
        return (
            <p style={{
                textAlign: "center", fontSize: "18px", fontWeight: "bold"
            }}>
                Search for a video
            </p>
        )
    }
    return (
        <div className='video-player'>
            <iframe
                className='video-iframe'
                title={videoId}
                src={`https://www.youtube.com/embed/${videoId}`}
            />
        </div>
    );
}

export default VideoDetail;