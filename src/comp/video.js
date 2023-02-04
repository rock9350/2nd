import React, { useState } from "react";
import "./video.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const Videoo = (props) => {
     let [get,set]=useState(true);
    const mute =()=>{
        set(false);
}  
return (
    <>
    <div onClick={mute}>
    <Video
        id="vid"
        autoPlay
        loop
        muted={get}
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster="http://sourceposter.jpg"
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source
          src={props.src}
          type="video/webm"
        />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="http://source.vtt"
          default
        />
      </Video>
    </div>
    </>
  );
};

export default Videoo;
