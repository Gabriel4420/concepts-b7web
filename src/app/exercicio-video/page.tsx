'use client'

import { PlayIcon, PauseIcon } from "lucide-react";
import { useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";

const Video: React.FC = () => {
  const [playing, setIsPlaying] = useState(false);


  return (
    <div className="h-screen bg-gradient-to-tr to-orange-500 from-slate-500 gap-10 flex flex-col items-center justify-center">
      <div className="flex flex-col rounded-full gap-5 border-4 border-white text-6xl">
        <button onClick={() => setIsPlaying(!playing)}>{playing ? <PlayIcon size={80} className="bg-blue-400 rounded-full text-white p-3 "/> : <PauseIcon size={80} className="bg-red-400 rounded-full text-white p-3"/>}</button>
      </div>
      <VideoPlayer url="https://www.w3schools.com/html/mov_bbb.mp4" isPlaying={playing}/>
    </div>
  );
};

export default Video;
