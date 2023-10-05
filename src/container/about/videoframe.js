import React from 'react';
import './videoframe.css'; // Import CSS for styling
import video from './video.mp4'

const VideoFrame = ({ videoSrc }) => {
  return (
    <div className="video-frame">
      <iframe
        title="Video"
        src={videoSrc}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoFrame;
