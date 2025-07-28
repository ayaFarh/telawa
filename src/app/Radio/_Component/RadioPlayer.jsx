import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function RadioPlayer({src}) {
  return (
    <div className=' w-screen fixed bottom-0 right-0 z-[4444]'>
        <AudioPlayer src={src} autoPlay showJumpControls={false}   className="!rounded-none !w-full " />
           
    </div>
  )
}
