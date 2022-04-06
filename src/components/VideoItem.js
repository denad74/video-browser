import React from "react";


function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "20vh",
    position: "relative"
  };
  return _styles;
}

const VideoItem = ({ videos, onSelectedVideo }) => {

const selectVideo = (videoIdObj, onSelectedVideo) => {
  onSelectedVideo(videoIdObj.videoId);
}

const  videoTitles= (videos, onSelectedVideo) => {
  return videos.map(({ snippet, id }, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(id, onSelectedVideo)}>
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}
  return <>{videoTitles(videos, onSelectedVideo)}</>;
};
 
export default VideoItem;