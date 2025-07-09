"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const QuranPlayer = ({ url }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!url || !video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    } else {
      console.error("HLS is not supported in this browser.");
    }
  }, [url]);

  return (
    <div className="video-container mt-4 ">
      <video
        ref={videoRef}
        controls
        style={{ width: "100%", maxWidth: "1000px", borderRadius: "8px" }}
      />
    </div>
  );
};

export default QuranPlayer;
